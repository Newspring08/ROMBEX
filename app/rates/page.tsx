"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpDown, Calculator, BarChart3, Loader2 } from "lucide-react"
import { useToastNotifications } from "@/hooks/use-toast-notification"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface ConversionResult {
  from: string
  to: string
  amount: number
  convertedAmount: number
  finalRate: number
  adminRate: number
  liveRate: number
  flag: string
}

interface ApiResponse {
  results: ConversionResult[]
}

const currencies = [
  { code: "USD", name: "US Dollar", flag: "https://flagcdn.com/w40/us.png" },
  { code: "GHS", name: "Ghanaian Cedi", flag: "https://flagcdn.com/w40/gh.png" },
  { code: "EUR", name: "Euro", flag: "https://flagcdn.com/w40/eu.png" },
  { code: "GBP", name: "British Pound", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "NGN", name: "Nigerian Naira", flag: "https://flagcdn.com/w40/ng.png" },
  { code: "CAD", name: "Canadian Dollar", flag: "https://flagcdn.com/w40/ca.png" },
  { code: "AUD", name: "Australian Dollar", flag: "https://flagcdn.com/w40/au.png" },
  { code: "JPY", name: "Japanese Yen", flag: "https://flagcdn.com/w40/jp.png" },
  { code: "CNY", name: "Chinese Yuan", flag: "https://flagcdn.com/w40/cn.png" },
  { code: "INR", name: "Indian Rupee", flag: "https://flagcdn.com/w40/in.png" },
]

const generateMockChartData = (fromCurrency: string, toCurrency: string, currentRate: number) => {
  const data = []
  const baseRate = currentRate || 0.093 // Default to GHS to USD rate

  for (let i = 29; i >= 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)

    // Generate realistic rate fluctuations (±5% variation)
    const variation = (Math.random() - 0.5) * 0.1 * baseRate
    const rate = Math.max(0, baseRate + variation)

    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      rate: Number(rate.toFixed(6)),
      fullDate: date.toISOString().split("T")[0],
    })
  }

  return data
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("1000")
  const [fromCurrency, setFromCurrency] = useState("GHS")
  const [toCurrency, setToCurrency] = useState("USD")
  const [result, setResult] = useState<ConversionResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("convert")
  const [chartFromCurrency, setChartFromCurrency] = useState("GHS")
  const [chartToCurrency, setChartToCurrency] = useState("USD")
  const [chartData, setChartData] = useState(generateMockChartData("GHS", "USD", 0.093))
  const { showSuccess, showError } = useToastNotifications()

  const handleConvert = async () => {
    if (!amount || !fromCurrency || !toCurrency) {
      showError("Please fill in all fields")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromCurrency,
          to: [toCurrency],
          amount: Number.parseFloat(amount),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch conversion rate")
      }

      const data: ApiResponse = await response.json()
      if (data.results && data.results.length > 0) {
        setResult(data.results[0])
        showSuccess(`${amount} ${fromCurrency} = ${data.results[0].convertedAmount} ${toCurrency}`)
      } else {
        throw new Error("No conversion data received")
      }
    } catch (error) {
      showError("Failed to get exchange rate. Please try again.")
      console.error("Conversion error:", error)
    } finally {
      setLoading(false)
    }
  }

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setResult(null)
  }

  const swapChartCurrencies = () => {
    setChartFromCurrency(chartToCurrency)
    setChartToCurrency(chartFromCurrency)
    // Generate new chart data for swapped currencies
    const newRate = result?.finalRate ? 1 / result.finalRate : 0.093
    setChartData(generateMockChartData(chartToCurrency, chartFromCurrency, newRate))
  }

  const getCurrencyFlag = (code: string) => {
    return currencies.find((c) => c.code === code)?.flag || "/placeholder.svg?height=24&width=32"
  }

  return (
    <Card className="bg-black w-full  ">
      <CardContent className="p-0 mt-32  md:max-w-5xl mx-auto rounded-lg mb-10 border shadow-lg bg-white">
        {/* Navigation Tabs */}
        <div className="flex gap-2 justify-center border-b p-4">
          <button
            onClick={() => setActiveTab("convert")}
            className={`flex items-center gap-2 px-8 py-3 font-medium transition-colors ${
              activeTab === "convert" ? "bg-black text-white rounded-full" : "text-slate-600 hover:text-slate-800"
            }`}
          >
            <Calculator className="w-4 h-4" />
            Convert
          </button>
          <button
            onClick={() => setActiveTab("charts")}
            className={`flex items-center gap-2 px-8 py-3 font-medium transition-colors ${
              activeTab === "charts" ? "bg-black text-white rounded-full" : "text-slate-600 hover:text-slate-800"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Charts
          </button>
        </div>

        {/* Converter Form */}
        {activeTab === "convert" && (
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 ">
              {/* Amount Input */}
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-sm font-medium text-slate-700">
                  Amount
                </Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="text-2xl font-bold h-9"
                  placeholder="1,000,000.00"
                />
              </div>

              {/* Currency Exchange */}
              <div className="md:col-span-2 space-y-2">
                <Label className="text-sm font-medium text-slate-700">Currency Exchange</Label>
                <div className="flex items-center gap-3">
                  {/* From Currency */}
                  <div className="flex-1">
                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                      <SelectTrigger className="h-24">
                        <SelectValue>
                          <div className="flex items-center gap-2">
                            <img
                              src={getCurrencyFlag(fromCurrency) || "/placeholder.svg"}
                              alt={`${fromCurrency} flag`}
                              className="w-6 h-4 object-cover rounded"
                            />
                            <span className="font-medium">{fromCurrency}</span>
                            <span className="text-slate-500">
                              - {currencies.find((c) => c.code === fromCurrency)?.name}
                            </span>
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            <div className="flex items-center gap-2">
                              <img
                                src={currency.flag || "/placeholder.svg"}
                                alt={`${currency.code} flag`}
                                className="w-6 h-4 object-cover rounded"
                              />
                              <span className="font-medium">{currency.code}</span>
                              <span className="text-slate-500">- {currency.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Swap Button in the middle */}
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 bg-transparent shrink-0"
                    onClick={swapCurrencies}
                  >
                    <ArrowUpDown className="w-4 h-4" />
                  </Button>

                  {/* To Currency */}
                  <div className="flex-1">
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger className="h-14">
                        <SelectValue>
                          <div className="flex items-center gap-2">
                            <img
                              src={getCurrencyFlag(toCurrency) || "/placeholder.svg"}
                              alt={`${toCurrency} flag`}
                              className="w-6 h-4 object-cover rounded"
                            />
                            <span className="font-medium">{toCurrency}</span>
                            <span className="text-slate-500">
                              - {currencies.find((c) => c.code === toCurrency)?.name}
                            </span>
                          </div>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            <div className="flex items-center gap-2">
                              <img
                                src={currency.flag || "/placeholder.svg"}
                                alt={`${currency.code} flag`}
                                className="w-6 h-4 object-cover rounded"
                              />
                              <span className="font-medium">{currency.code}</span>
                              <span className="text-slate-500">- {currency.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Convert Button */}
            <div className="flex justify-end mb-6 h-12 ">
              <button
                onClick={handleConvert}
                disabled={loading}
                className="bg-black hover:bg-black cursor-pointer text-white font-medium flex items-center gap-2 px-8 py-3 h-full font-medium transition-colors rounded-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Converting...
                  </>
                ) : (
                  "Convert"
                )}
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">
                      {result.amount} {result.from} =
                    </p>
                    <p className="text-3xl font-bold text-slate-900">
                      {result.convertedAmount.toLocaleString()} {result.to}
                    </p>
                  </div>
                  <img
                    src={result.flag || getCurrencyFlag(result.to)}
                    alt={`${result.to} flag`}
                    className="w-12 h-8 object-cover rounded"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="text-center">
                    <p className="text-sm text-slate-600">Exchange Rate</p>
                    <p className="text-xl font-bold text-blue-600">{result.finalRate.toFixed(6)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-600">Live Rate</p>
                    <p className="text-lg font-medium">{result.liveRate.toFixed(6)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-slate-600">Admin Rate</p>
                    <p className="text-lg font-medium">{result.adminRate.toFixed(6)}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Disclaimer
            <div className="mt-6 text-center text-sm text-slate-500">
              <p>
                ℹ️ We use the mid-market rate for our Converter. This is for informational purposes only. You won't
                receive this rate when sending money.{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Login to view send rates
                </a>
              </p>
            </div> */}
          </div>
        )}

        {activeTab === "charts" && (
          <div className="p-8">
            <div className="space-y-6">
              {/* Chart Currency Selection */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium text-slate-700">From</Label>
                  <Select
                    value={chartFromCurrency}
                    onValueChange={(value) => {
                      setChartFromCurrency(value)
                      setChartData(generateMockChartData(value, chartToCurrency, result?.finalRate || 0.093))
                    }}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img
                            src={getCurrencyFlag(chartFromCurrency) || "/placeholder.svg"}
                            alt={`${chartFromCurrency} flag`}
                            className="w-4 h-3 object-cover rounded"
                          />
                          <span className="font-medium">{chartFromCurrency}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          <div className="flex items-center gap-2">
                            <img
                              src={currency.flag || "/placeholder.svg"}
                              alt={`${currency.code} flag`}
                              className="w-4 h-3 object-cover rounded"
                            />
                            <span>{currency.code}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="outline" size="sm" onClick={swapChartCurrencies}>
                  <ArrowUpDown className="w-3 h-3" />
                </Button>

                <div className="flex items-center gap-2">
                  <Label className="text-sm font-medium text-slate-700">To</Label>
                  <Select
                    value={chartToCurrency}
                    onValueChange={(value) => {
                      setChartToCurrency(value)
                      setChartData(generateMockChartData(chartFromCurrency, value, result?.finalRate || 0.093))
                    }}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img
                            src={getCurrencyFlag(chartToCurrency) || "/placeholder.svg"}
                            alt={`${chartToCurrency} flag`}
                            className="w-4 h-3 object-cover rounded"
                          />
                          <span className="font-medium">{chartToCurrency}</span>
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          <div className="flex items-center gap-2">
                            <img
                              src={currency.flag || "/placeholder.svg"}
                              alt={`${currency.code} flag`}
                              className="w-4 h-3 object-cover rounded"
                            />
                            <span>{currency.code}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Chart Title */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900">
                  {chartFromCurrency} to {chartToCurrency} Exchange Rate
                </h3>
                <p className="text-slate-600">30-day trend</p>
              </div>

              {/* Chart */}
              <div className="bg-slate-50 rounded-lg p-6">
                <ChartContainer
                  config={{
                    rate: {
                      label: "Exchange Rate",
                      color: "hsl(217, 91%, 60%)",
                    },
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        domain={["dataMin - 0.001", "dataMax + 0.001"]}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent />}
                        labelFormatter={(value) => `Date: ${value}`}
                        formatter={(value: number) => [value.toFixed(6), "Rate"]}
                      />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        stroke="var(--color-rate)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, stroke: "var(--color-rate)", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>

              {/* Chart Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white border rounded-lg p-4 text-center">
                  <p className="text-sm text-slate-600">Current Rate</p>
                  <p className="text-xl font-bold text-blue-600">{chartData[chartData.length - 1]?.rate.toFixed(6)}</p>
                </div>
                <div className="bg-white border rounded-lg p-4 text-center">
                  <p className="text-sm text-slate-600">30-Day High</p>
                  <p className="text-xl font-bold text-green-600">
                    {Math.max(...chartData.map((d) => d.rate)).toFixed(6)}
                  </p>
                </div>
                <div className="bg-white border rounded-lg p-4 text-center">
                  <p className="text-sm text-slate-600">30-Day Low</p>
                  <p className="text-xl font-bold text-red-600">
                    {Math.min(...chartData.map((d) => d.rate)).toFixed(6)}
                  </p>
                </div>
                <div className="bg-white border rounded-lg p-4 text-center">
                  <p className="text-sm text-slate-600">Average</p>
                  <p className="text-xl font-bold text-slate-700">
                    {(chartData.reduce((sum, d) => sum + d.rate, 0) / chartData.length).toFixed(6)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

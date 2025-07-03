import { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculatedValues = useMemo(() => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment = principal * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    const totalInterest = (monthlyPayment * numberOfPayments) - principal;
    const totalAmount = principal + totalInterest;
    const downPaymentPercentage = (downPayment / homePrice) * 100;

    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalInterest,
      totalAmount,
      principal,
      downPaymentPercentage
    };
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-luxury-text mb-4">Mortgage Calculator</h1>
          <p className="text-luxury-text-muted max-w-2xl mx-auto">
            Calculate your monthly mortgage payments and see how different factors affect your loan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Controls */}
          <Card className="bg-luxury-light border-luxury-neutral">
            <CardHeader>
              <CardTitle className="text-luxury-text">Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="homePrice" className="text-luxury-text">Home Price</Label>
                <Input
                  id="homePrice"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="bg-luxury-dark border-luxury-neutral text-luxury-text"
                />
                <p className="text-sm text-luxury-text-muted">{formatCurrency(homePrice)}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="downPayment" className="text-luxury-text">Down Payment</Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="bg-luxury-dark border-luxury-neutral text-luxury-text"
                />
                <Slider
                  value={[calculatedValues.downPaymentPercentage]}
                  onValueChange={(value) => setDownPayment((value[0] / 100) * homePrice)}
                  max={50}
                  min={5}
                  step={1}
                  className="mt-2"
                />
                <p className="text-sm text-luxury-text-muted">
                  {formatCurrency(downPayment)} ({calculatedValues.downPaymentPercentage.toFixed(1)}%)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate" className="text-luxury-text">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="bg-luxury-dark border-luxury-neutral text-luxury-text"
                />
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  max={10}
                  min={2}
                  step={0.1}
                  className="mt-2"
                />
                <p className="text-sm text-luxury-text-muted">{interestRate}% APR</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="loanTerm" className="text-luxury-text">Loan Term (Years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="bg-luxury-dark border-luxury-neutral text-luxury-text"
                />
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  max={30}
                  min={10}
                  step={1}
                  className="mt-2"
                />
                <p className="text-sm text-luxury-text-muted">{loanTerm} years</p>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader>
                <CardTitle className="text-luxury-text">Monthly Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-luxury-gold mb-4">
                  {formatCurrency(calculatedValues.monthlyPayment)}
                </div>
                <p className="text-luxury-text-muted">Principal & Interest</p>
              </CardContent>
            </Card>

            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader>
                <CardTitle className="text-luxury-text">Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-luxury-text-muted">Loan Amount:</span>
                  <span className="text-luxury-text font-semibold">
                    {formatCurrency(calculatedValues.principal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-luxury-text-muted">Total Interest:</span>
                  <span className="text-luxury-text font-semibold">
                    {formatCurrency(calculatedValues.totalInterest)}
                  </span>
                </div>
                <div className="flex justify-between border-t border-luxury-neutral pt-2">
                  <span className="text-luxury-text-muted">Total Amount:</span>
                  <span className="text-luxury-gold font-bold">
                    {formatCurrency(calculatedValues.totalAmount)}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-luxury-light border-luxury-neutral">
              <CardHeader>
                <CardTitle className="text-luxury-text">Payment Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-luxury-text-muted">Principal</span>
                      <span className="text-sm text-luxury-text">
                        {((calculatedValues.principal / calculatedValues.totalAmount) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-luxury-neutral rounded-full h-2">
                      <div 
                        className="bg-luxury-gold h-2 rounded-full"
                        style={{
                          width: `${(calculatedValues.principal / calculatedValues.totalAmount) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-luxury-text-muted">Interest</span>
                      <span className="text-sm text-luxury-text">
                        {((calculatedValues.totalInterest / calculatedValues.totalAmount) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-luxury-neutral rounded-full h-2">
                      <div 
                        className="bg-luxury-neutral-light h-2 rounded-full"
                        style={{
                          width: `${(calculatedValues.totalInterest / calculatedValues.totalAmount) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MortgageCalculator;
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginData);
    alert("Login functionality would be implemented here");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log("Signup:", signupData);
    alert("Signup functionality would be implemented here");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-luxury-text mb-4">Welcome</h1>
            <p className="text-luxury-text-muted">
              Sign in to access your account or create a new one to get started.
            </p>
          </div>

          <Card className="bg-luxury-light border-luxury-neutral">
            <CardHeader>
              <CardTitle className="text-luxury-text text-center">Account Access</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-luxury-dark">
                  <TabsTrigger value="login" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-dark">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-dark">
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="text-luxury-text">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        className="bg-luxury-dark border-luxury-neutral"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="text-luxury-text">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                        className="bg-luxury-dark border-luxury-neutral"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="remember-me"
                          checked={loginData.rememberMe}
                          onCheckedChange={(checked) => 
                            setLoginData({...loginData, rememberMe: checked === true})
                          }
                        />
                        <Label htmlFor="remember-me" className="text-sm text-luxury-text-muted">
                          Remember me
                        </Label>
                      </div>
                      <Button variant="link" className="text-luxury-gold p-0 h-auto">
                        Forgot password?
                      </Button>
                    </div>

                    <Button type="submit" variant="luxury" className="w-full">
                      Sign In
                    </Button>
                  </form>

                  <div className="mt-6">
                    <Separator className="bg-luxury-neutral" />
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-luxury-light px-2 text-luxury-text-muted -mt-2">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      Facebook
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="signup" className="mt-6">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="first-name" className="text-luxury-text">First Name</Label>
                        <Input
                          id="first-name"
                          value={signupData.firstName}
                          onChange={(e) => setSignupData({...signupData, firstName: e.target.value})}
                          className="bg-luxury-dark border-luxury-neutral"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name" className="text-luxury-text">Last Name</Label>
                        <Input
                          id="last-name"
                          value={signupData.lastName}
                          onChange={(e) => setSignupData({...signupData, lastName: e.target.value})}
                          className="bg-luxury-dark border-luxury-neutral"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-luxury-text">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        value={signupData.email}
                        onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                        className="bg-luxury-dark border-luxury-neutral"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-luxury-text">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={signupData.password}
                        onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                        className="bg-luxury-dark border-luxury-neutral"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password" className="text-luxury-text">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                        className="bg-luxury-dark border-luxury-neutral"
                        placeholder="••••••••"
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="agree-terms"
                        checked={signupData.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setSignupData({...signupData, agreeToTerms: checked === true})
                        }
                        required
                      />
                      <Label htmlFor="agree-terms" className="text-sm text-luxury-text-muted">
                        I agree to the{" "}
                        <Button variant="link" className="text-luxury-gold p-0 h-auto text-sm">
                          Terms of Service
                        </Button>{" "}
                        and{" "}
                        <Button variant="link" className="text-luxury-gold p-0 h-auto text-sm">
                          Privacy Policy
                        </Button>
                      </Label>
                    </div>

                    <Button type="submit" variant="luxury" className="w-full">
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-luxury-text-muted text-sm">
              Need help?{" "}
              <Button variant="link" className="text-luxury-gold p-0 h-auto text-sm">
                Contact Support
              </Button>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
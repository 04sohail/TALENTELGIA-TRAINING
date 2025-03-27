import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AuthPage = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login attempted with:', loginEmail);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        if (signupPassword !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        console.log('Signup attempted with:', signupEmail);
    };

    return (
        <div className="flex w-screen h-screen overflow-hidden">
            {/* Left Side Full Screen Image */}
            <div
                className="hidden lg:block lg:w-1/2 bg-cover bg-center relative"
                style={{
                    backgroundImage: `url("/api/placeholder/1000/1500")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Overlay for text visibility */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute bottom-10 left-10 text-white z-10 max-w-md">
                    <h2 className="text-4xl font-bold mb-4">Discover Our World</h2>
                    <p className="text-xl">Explore amazing products and unbeatable deals</p>
                </div>
            </div>

            {/* Right Side Auth Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100 p-4">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl">E-Commerce Store</CardTitle>
                        <CardDescription className="text-center">
                            Welcome! Please login or create an account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="login" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="login">Login</TabsTrigger>
                                <TabsTrigger value="signup">Sign Up</TabsTrigger>
                            </TabsList>

                            {/* Login Tab */}
                            <TabsContent value="login">
                                <form onSubmit={handleLogin} className="space-y-4 pt-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="login-email">Email</Label>
                                        <Input
                                            id="login-email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="login-password">Password</Label>
                                        <Input
                                            id="login-password"
                                            type="password"
                                            placeholder="Enter your password"
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Login
                                    </Button>
                                    <div className="text-center text-sm text-gray-600">
                                        <a href="#" className="hover:underline">Forgot Password?</a>
                                    </div>
                                </form>
                            </TabsContent>

                            {/* Signup Tab */}
                            <TabsContent value="signup">
                                <form onSubmit={handleSignup} className="space-y-4 pt-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-email">Email</Label>
                                        <Input
                                            id="signup-email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={signupEmail}
                                            onChange={(e) => setSignupEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="signup-password">Password</Label>
                                        <Input
                                            id="signup-password"
                                            type="password"
                                            placeholder="Create a password"
                                            value={signupPassword}
                                            onChange={(e) => setSignupPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="confirm-password">Confirm Password</Label>
                                        <Input
                                            id="confirm-password"
                                            type="password"
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Create Account
                                    </Button>
                                    <div className="text-center text-sm text-gray-600">
                                        By signing up, you agree to our
                                        <a href="#" className="ml-1 hover:underline">Terms of Service</a>
                                    </div>
                                </form>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AuthPage;
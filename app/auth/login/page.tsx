"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Sun,
  Moon,
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  ArrowRight,
  Github,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createClient } from "@/utils/supabase/client";

const supabase = createClient();
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// Define the sign-up schema
const signupSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function AuthForm() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  // Initialize theme based on system preference
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(isDarkMode ? "dark" : "light");

    // Apply theme class to document
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Initialize React Hook Form with Zod validation for login
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  // Initialize React Hook Form with Zod validation for signup
  const signupForm = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLogin = async (values: LoginFormValues) => {
    try {
      setIsLoading(true);
      setAuthError(null);

      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;

      // Redirect or update UI state on successful login
      //   window.location.href = "/dashboard";
    } catch (error: any) {
      setAuthError(error.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle signup
  const onSignup = async (values: SignupFormValues) => {
    try {
      setIsLoading(true);
      setAuthError(null);

      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;

      // Show success message or redirect
      setActiveTab("login");
      loginForm.setValue("email", values.email);
    } catch (error: any) {
      setAuthError(error.message || "Failed to sign up");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle OAuth login
  const handleOAuthLogin = async (
    provider: "google" | "github" | "twitter"
  ) => {
    try {
      setIsLoading(true);
      setAuthError(null);

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: "http://localhost:3000/auth/callback?next=/dashboard",
        },
      });

      if (error) throw error;
    } catch (error: any) {
      setAuthError(error.message || `Failed to sign in with ${provider}`);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50"
          : "bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-900"
      } transition-colors duration-300`}
    >
      <div className="w-full max-w-md px-4">
        <div className="absolute top-4 right-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleTheme}
                  className={
                    theme === "dark"
                      ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
                      : "border-slate-200 bg-white hover:bg-slate-100"
                  }
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-slate-700" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle {theme === "dark" ? "light" : "dark"} mode</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Card
          className={`w-full border shadow-lg ${
            theme === "dark"
              ? "bg-slate-800/90 border-slate-700"
              : "bg-white/90 border-slate-200"
          } backdrop-blur-sm`}
        >
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <div
                className={`p-2 rounded-full ${
                  theme === "dark" ? "bg-indigo-600/20" : "bg-indigo-100"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
            </div>
            <CardTitle
              className={`text-2xl font-bold text-center ${
                theme === "dark" ? "text-slate-50" : "text-slate-900"
              }`}
            >
              Welcome Back
            </CardTitle>
            <CardDescription
              className={`text-center ${
                theme === "dark" ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {authError && (
              <Alert
                className={`${
                  theme === "dark"
                    ? "bg-red-900/20 border-red-900 text-red-300"
                    : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                <AlertCircle className="h-4 w-4 mr-2" />
                <AlertDescription>{authError}</AlertDescription>
              </Alert>
            )}

            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList
                className={`grid w-full grid-cols-2 ${
                  theme === "dark" ? "bg-slate-700" : "bg-slate-100"
                }`}
              >
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="mt-4 space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    type="button"
                    className={`flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600"
                        : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                    onClick={() => handleOAuthLogin("google")}
                    disabled={isLoading}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                  </Button>

                  <Button
                    variant="outline"
                    type="button"
                    className={`flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600"
                        : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                    onClick={() => handleOAuthLogin("github")}
                    disabled={isLoading}
                  >
                    <Github className="h-5 w-5" />
                  </Button>

                  <Button
                    variant="outline"
                    type="button"
                    className={`flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600"
                        : "bg-white hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                    onClick={() => handleOAuthLogin("twitter")}
                    disabled={isLoading}
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center my-4">
                  <Separator
                    className={`flex-1 ${
                      theme === "dark" ? "bg-slate-700" : "bg-slate-200"
                    }`}
                  />
                  <span
                    className={`px-3 text-xs ${
                      theme === "dark" ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    OR CONTINUE WITH
                  </span>
                  <Separator
                    className={`flex-1 ${
                      theme === "dark" ? "bg-slate-700" : "bg-slate-200"
                    }`}
                  />
                </div>

                <Form {...loginForm}>
                  <form
                    onSubmit={loginForm.handleSubmit(onLogin)}
                    className="space-y-4"
                  >
                    <FormField
                      control={loginForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              theme === "dark"
                                ? "text-slate-300"
                                : "text-slate-700"
                            }
                          >
                            Email
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail
                                className={`absolute left-3 top-3 h-4 w-4 ${
                                  theme === "dark"
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                              />
                              <Input
                                placeholder="email@example.com"
                                className={`pl-10 ${
                                  theme === "dark"
                                    ? "bg-slate-700 border-slate-600 text-slate-200 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                    : "bg-white border-slate-300 text-slate-900 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                }`}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              theme === "dark"
                                ? "text-slate-300"
                                : "text-slate-700"
                            }
                          >
                            Password
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock
                                className={`absolute left-3 top-3 h-4 w-4 ${
                                  theme === "dark"
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                              />
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                className={`pl-10 ${
                                  theme === "dark"
                                    ? "bg-slate-700 border-slate-600 text-slate-200 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                    : "bg-white border-slate-300 text-slate-900 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                }`}
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <FormField
                          control={loginForm.control}
                          name="rememberMe"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <FormLabel
                                className={`text-sm font-medium ${
                                  theme === "dark"
                                    ? "text-slate-300"
                                    : "text-slate-700"
                                }`}
                              >
                                Remember me
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                      <a
                        href="/forgot-password"
                        className={`text-sm font-medium ${
                          theme === "dark"
                            ? "text-indigo-400 hover:text-indigo-300"
                            : "text-indigo-600 hover:text-indigo-700"
                        }`}
                      >
                        Forgot password?
                      </a>
                    </div>

                    <Button
                      type="submit"
                      className={`w-full ${
                        theme === "dark"
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-indigo-600 hover:bg-indigo-700 text-white"
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Signing in..."
                      ) : (
                        <span className="flex items-center">
                          Sign In
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="register" className="mt-4 space-y-4">
                <Form {...signupForm}>
                  <form
                    onSubmit={signupForm.handleSubmit(onSignup)}
                    className="space-y-4"
                  >
                    <FormField
                      control={signupForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              theme === "dark"
                                ? "text-slate-300"
                                : "text-slate-700"
                            }
                          >
                            Email
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail
                                className={`absolute left-3 top-3 h-4 w-4 ${
                                  theme === "dark"
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                              />
                              <Input
                                placeholder="email@example.com"
                                className={`pl-10 ${
                                  theme === "dark"
                                    ? "bg-slate-700 border-slate-600 text-slate-200 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                    : "bg-white border-slate-300 text-slate-900 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                }`}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              theme === "dark"
                                ? "text-slate-300"
                                : "text-slate-700"
                            }
                          >
                            Password
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock
                                className={`absolute left-3 top-3 h-4 w-4 ${
                                  theme === "dark"
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                              />
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                className={`pl-10 ${
                                  theme === "dark"
                                    ? "bg-slate-700 border-slate-600 text-slate-200 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                    : "bg-white border-slate-300 text-slate-900 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                }`}
                                {...field}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4" />
                                ) : (
                                  <Eye className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signupForm.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel
                            className={
                              theme === "dark"
                                ? "text-slate-300"
                                : "text-slate-700"
                            }
                          >
                            Confirm Password
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock
                                className={`absolute left-3 top-3 h-4 w-4 ${
                                  theme === "dark"
                                    ? "text-slate-400"
                                    : "text-slate-500"
                                }`}
                              />
                              <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="********"
                                className={`pl-10 ${
                                  theme === "dark"
                                    ? "bg-slate-700 border-slate-600 text-slate-200 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                    : "bg-white border-slate-300 text-slate-900 focus-visible:ring-indigo-600 focus-visible:border-indigo-600"
                                }`}
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className={`w-full ${
                        theme === "dark"
                          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                          : "bg-indigo-600 hover:bg-indigo-700 text-white"
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Creating account..."
                      ) : (
                        <span className="flex items-center">
                          Create Account
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col items-center justify-center pt-0">
            <p
              className={`text-xs text-center mt-4 ${
                theme === "dark" ? "text-slate-400" : "text-slate-500"
              }`}
            >
              By continuing, you agree to our{" "}
              <a
                href="/terms"
                className={
                  theme === "dark"
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                }
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className={
                  theme === "dark"
                    ? "text-indigo-400 hover:text-indigo-300"
                    : "text-indigo-600 hover:text-indigo-700"
                }
              >
                Privacy Policy
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

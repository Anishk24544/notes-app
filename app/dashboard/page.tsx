"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { createClient } from "@/utils/supabase/client";
import { LogOut, Menu } from "lucide-react";
import { User } from "@supabase/supabase-js";

const supabase = createClient();

const navItems = [
  {
    name: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="9"></rect>
        <rect x="14" y="3" width="7" height="5"></rect>
        <rect x="14" y="12" width="7" height="9"></rect>
        <rect x="3" y="16" width="7" height="5"></rect>
      </svg>
    ),
    href: "/dashboard",
    active: true,
  },
  {
    name: "All Notes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    href: "/notes",
    active: false,
  },
  {
    name: "AI Insights",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    href: "/insights",
    active: false,
    badge: "New",
  },
  {
    name: "Shared",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    href: "/shared",
    active: false,
  },
  {
    name: "Trash",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
    ),
    href: "/trash",
    active: false,
  },
];

const recentNotesMockData = [
  {
    id: 1,
    title: "Meeting Notes",
    date: "Apr 23, 2025",
    tags: ["work", "project"],
    excerpt:
      "Discussed project timeline and allocated resources for Phase 2...",
    color: "indigo",
  },
  {
    id: 2,
    title: "Book Ideas",
    date: "Apr 22, 2025",
    tags: ["creative", "personal"],
    excerpt: "Character development concepts for the protagonist...",
    color: "violet",
  },
  {
    id: 3,
    title: "Weekly Tasks",
    date: "Apr 20, 2025",
    tags: ["todo", "work"],
    excerpt: "1. Finish dashboard UI design 2. Review content strategy...",
    color: "emerald",
  },
];

// Sidebar component for both desktop and mobile
function Sidebar({
  user,
  isMobile = false,
  closeMobileSidebar = () => {},
}: {
  user: User;
  isMobile: boolean;
  closeMobileSidebar: () => void;
}) {
  return (
    <div
      className={cn(
        "flex flex-col h-full",
        isMobile ? "py-4 px-2" : "py-8 px-4"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="bg-indigo-600 text-white p-2 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          NeuraNotes
        </h1>
      </div>

      {/* New Note Button */}
      <Button className="mb-6 bg-indigo-600 hover:bg-indigo-700 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M12 5v14M5 12h14"></path>
        </svg>
        New Note
      </Button>

      {/* Search */}
      <div className="relative mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <Input
          type="search"
          placeholder="Search notes..."
          className="pl-10 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
        />
      </div>

      {/* Navigation */}
      <nav className="space-y-1 mb-6">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              if (isMobile) {
                e.preventDefault();
                closeMobileSidebar();
                // You would use router.push(item.href) here in a real app
              }
            }}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
              item.active
                ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            )}
          >
            <span
              className={cn(
                item.active
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-500 dark:text-slate-400"
              )}
            >
              {item.icon}
            </span>
            <span>{item.name}</span>
            {item.badge && (
              <Badge
                variant="outline"
                className="ml-auto text-xs py-0 h-5 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800"
              >
                {item.badge}
              </Badge>
            )}
          </a>
        ))}
      </nav>

      {/* Recent Tags */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 px-3">
          Recent Tags
        </h3>
        <div className="flex flex-wrap gap-2 px-3">
          <Badge
            variant="secondary"
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
          >
            #work
          </Badge>
          <Badge
            variant="secondary"
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
          >
            #ideas
          </Badge>
          <Badge
            variant="secondary"
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
          >
            #personal
          </Badge>
          <Badge
            variant="secondary"
            className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
          >
            #todo
          </Badge>
        </div>
      </div>

      {/* User Profile */}
      <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4 px-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user?.user_metadata?.avatar_url} />
            <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
              {user?.user_metadata?.name
                ?.split(" ")
                .map((n: any[]) => n[0])
                .join("") ||
                user?.email?.substring(0, 2).toUpperCase() ||
                "UN"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
              {user?.user_metadata?.name || user?.email || "User"}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              {user?.email}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full cursor-pointer hover:bg-red-500 transition duration-300 ease-in-out  hover:text-neutral-100 h-8 w-8"
          >
            <LogOut />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [recentNotes, setRecentNotes] = useState(recentNotesMockData);
  const router = useRouter();

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);

        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        console.log(user, user?.user_metadata);
        if (error) {
          throw error;
        }
        setUser(user);
        if (user) {
          // Get user profile data
          const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();

          if (profileError) {
            console.error("Error fetching profile:", profileError);
          } else {
            // setUser({ ...user });
          }
        } else {
          // Redirect to login if not authenticated
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };
  console.log(user);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse bg-indigo-600 text-white p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <div className="text-indigo-600 dark:text-indigo-400 text-lg font-medium">
            Loading your workspace...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <Sidebar
          user={user as User}
          isMobile={false}
          closeMobileSidebar={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 sm:max-w-xs">
          <Sidebar
            user={user as User}
            isMobile={true}
            closeMobileSidebar={() => setIsMobileMenuOpen(false)}
          />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen max-h-screen overflow-hidden">
        {/* Header */}
        <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-10">
          <div className="flex justify-between items-center py-4 px-4 lg:px-8">
            {/* Left: Mobile Menu Button & Page Title */}
            <div className="flex items-center gap-3">
              {/* <SheetTrigger className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-500"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </Button>
              </SheetTrigger> */}
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Dashboard
              </h2>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              {/* Notification */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <span className="absolute top-0 right-0 h-2 w-2 bg-indigo-600 rounded-full"></span>
              </Button>

              {/* Theme Toggle (placeholder) */}
              <Button variant="ghost" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </Button>

              {/* User Avatar (mobile only) */}
              <Avatar className="md:hidden">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400">
                  {user?.user_metadata?.name
                    ?.split(" ")
                    .map((n: any[]) => n[0])
                    .join("") ||
                    user?.email?.substring(0, 2).toUpperCase() ||
                    "UN"}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Hello, {user?.user_metadata?.name?.split(" ")[0] || "there"}!
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Here's an overview of your workspace
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Notes
                </CardTitle>
                <CardDescription className="text-indigo-100">
                  You have 12 notes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12</div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-violet-600/20"></div>
              <CardHeader className="pb-2 relative">
                <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  AI Summaries
                </CardTitle>
                <CardDescription>Generated this week</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-3xl font-bold text-violet-600 dark:text-violet-400">
                  8
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20"></div>
              <CardHeader className="pb-2 relative">
                <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Collaborations
                </CardTitle>
                <CardDescription>Active shared notes</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  3
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="recent" className="mb-8">
            <TabsList className="mb-4 bg-slate-100 dark:bg-slate-800 p-1">
              <TabsTrigger
                value="recent"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
              >
                Recent Notes
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
              >
                AI Insights
              </TabsTrigger>
              <TabsTrigger
                value="shared"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-950"
              >
                Shared With Me
              </TabsTrigger>
            </TabsList>

            {/* Recent Notes Tab */}
            <TabsContent value="recent">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentNotes.map((note) => (
                  <Card
                    key={note.id}
                    className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden group"
                  >
                    <div className={`h-1 w-full bg-${note.color}-500`}></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {note.title}
                        </CardTitle>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {note.date}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                        {note.excerpt}
                      </p>
                      <div className="flex gap-2">
                        {note.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full text-xs text-slate-700 dark:text-slate-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Add New Note Card */}
                <Card className="cursor-pointer hover:shadow-md transition-shadow border-dashed border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center h-[200px] bg-slate-50 dark:bg-slate-900">
                  <div className="flex flex-col items-center text-slate-500 dark:text-slate-400">
                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                    </div>
                    <span className="text-sm font-medium">Create New Note</span>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* AI Insights Tab */}
            <TabsContent value="ai">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* AI Summaries Card */}
                <Card className="bg-white dark:bg-slate-950">
                  <CardHeader>
                    <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                      Key Insights
                    </CardTitle>
                    <CardDescription>
                      AI-generated from your recent notes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-md border border-indigo-100 dark:border-indigo-900">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect
                              x="8"
                              y="2"
                              width="8"
                              height="4"
                              rx="1"
                              ry="1"
                            ></rect>
                          </svg>
                          Action Items
                        </h4>
                        <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                          <li>Schedule team meeting for project review</li>
                          <li>Research new note-taking methodologies</li>
                          <li>Complete weekly report by Friday</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-violet-50 dark:bg-violet-950 rounded-md border border-violet-100 dark:border-violet-900">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                            <line x1="12" y1="22.08" x2="12" y2="12"></line>
                          </svg>
                          Common Themes
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-violet-100 dark:bg-violet-900 px-2 py-1 rounded-full text-xs text-violet-700 dark:text-violet-300">
                            #productivity
                          </span>
                          <span className="bg-violet-100 dark:bg-violet-900 px-2 py-1 rounded-full text-xs text-violet-700 dark:text-violet-300">
                            #project management
                          </span>
                          <span className="bg-violet-100 dark:bg-violet-900 px-2 py-1 rounded-full text-xs text-violet-700 dark:text-violet-300">
                            #creative writing
                          </span>
                          <span className="bg-violet-100 dark:bg-violet-900 px-2 py-1 rounded-full text-xs text-violet-700 dark:text-violet-300">
                            #research
                          </span>
                        </div>
                      </div>

                      <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-md border border-emerald-100 dark:border-emerald-900">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="19" y1="5" x2="5" y2="19"></line>
                            <circle cx="6.5" cy="6.5" r="2.5"></circle>
                            <circle cx="17.5" cy="17.5" r="2.5"></circle>
                          </svg>
                          Related Notes
                        </h4>
                        <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                          <li className="flex gap-2 items-center">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                            <span className="text-sm">
                              Meeting Notes from April 15
                            </span>
                          </li>
                          <li className="flex gap-2 items-center">
                            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                            <span className="text-sm">
                              Product Design Research
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Generated Content Card */}
                <Card className="overflow-hidden">
                  <CardHeader className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <CardTitle className="text-slate-900 dark:text-white flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      AI Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-slate-200 dark:divide-slate-800">
                      <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-indigo-600 dark:text-indigo-400"
                            >
                              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                              <line x1="12" y1="22.08" x2="12" y2="12"></line>
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                              Summarized "Meeting Notes"
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Today at 2:45 PM
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-indigo-600 dark:text-indigo-400"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <line x1="10" y1="9" x2="8" y2="9"></line>
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                              Extracted action items from "Weekly Tasks"
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Yesterday at 10:15 AM
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-indigo-600 dark:text-indigo-400"
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                              Connected "Book Ideas" with similar notes
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Apr 21, 2025
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-indigo-600 dark:text-indigo-400"
                            >
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-900 dark:text-white">
                              Protected sensitive information in shared notes
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              Apr 20, 2025
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Shared With Me Tab */}
            <TabsContent value="shared">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <CardTitle className="text-slate-900 dark:text-white text-lg">
                      Project Brainstorm
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                    >
                      Shared
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 text-xs">
                          AC
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          Alex Chen
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Owner • 3 collaborators
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      Product brainstorming session notes with feature
                      prioritization and design mockups...
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Last updated 2 hours ago
                      </span>
                      <Button variant="outline" size="sm">
                        Open
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <CardTitle className="text-slate-900 dark:text-white text-lg">
                      Meeting Minutes
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"
                    >
                      Shared
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400 text-xs">
                          JW
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          Jamie Wong
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Owner • 5 collaborators
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      Weekly team meeting notes with action items, project
                      updates, and upcoming deadlines...
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Last updated yesterday
                      </span>
                      <Button variant="outline" size="sm">
                        Open
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Actions Grid */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 h-auto flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                <span>New Note</span>
              </Button>

              <Button
                variant="outline"
                className="p-6 h-auto flex flex-col items-center justify-center gap-2 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                <span>AI Summary</span>
              </Button>

              <Button
                variant="outline"
                className="p-6 h-auto flex flex-col items-center justify-center gap-2 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span>Share Note</span>
              </Button>

              <Button
                variant="outline"
                className="p-6 h-auto flex flex-col items-center justify-center gap-2 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
                <span>Templates</span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

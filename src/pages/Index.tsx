import { AttendanceCard } from "@/components/AttendanceCard";
import { StreakCard } from "@/components/StreakCard";
import { WeeklyChart } from "@/components/WeeklyChart";
import { LeaveApplication } from "@/components/LeaveApplication";
import { RecentAttendance } from "@/components/RecentAttendance";
import { GraduationCap, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AttendanceTracker</h1>
                <p className="text-sm text-muted-foreground">Student Portal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-foreground">John Doe</p>
                  <p className="text-xs text-muted-foreground">Student ID: 2024001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Welcome back, John!</h2>
            <p className="text-muted-foreground">Here's your attendance overview for this week</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AttendanceCard
              title="Overall Attendance"
              percentage={87}
              present={104}
              total={120}
              trend="up"
              icon={<GraduationCap className="h-5 w-5" />}
            />
            <AttendanceCard
              title="This Month"
              percentage={92}
              present={23}
              total={25}
              trend="up"
            />
            <AttendanceCard
              title="This Week"
              percentage={85}
              present={17}
              total={20}
              trend="stable"
            />
            <StreakCard
              currentStreak={12}
              bestStreak={28}
              streakType="attendance"
            />
          </div>

          {/* Charts and Applications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <WeeklyChart />
            <LeaveApplication />
          </div>

          {/* Recent Attendance */}
          <RecentAttendance />
        </div>
      </main>
    </div>
  );
};

export default Index;

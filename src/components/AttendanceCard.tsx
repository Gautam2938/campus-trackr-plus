import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp } from "lucide-react";

interface AttendanceCardProps {
  title: string;
  percentage: number;
  present: number;
  total: number;
  trend?: "up" | "down" | "stable";
  icon?: React.ReactNode;
}

export const AttendanceCard = ({ 
  title, 
  percentage, 
  present, 
  total, 
  trend = "stable",
  icon = <Calendar className="h-5 w-5" />
}: AttendanceCardProps) => {
  const getStatusColor = (percentage: number) => {
    if (percentage >= 85) return "success";
    if (percentage >= 75) return "warning";
    return "destructive";
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "down":
        return <TrendingUp className="h-4 w-4 text-destructive rotate-180" />;
      default:
        return null;
    }
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-card to-secondary/20 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-foreground">
              {percentage}%
            </div>
            <p className="text-xs text-muted-foreground">
              {present}/{total} classes
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={getStatusColor(percentage) as any} className="text-xs">
              {percentage >= 85 ? "Good" : percentage >= 75 ? "Warning" : "Critical"}
            </Badge>
            {getTrendIcon(trend)}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3 w-full bg-secondary rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${
              percentage >= 85 ? "bg-success" : 
              percentage >= 75 ? "bg-warning" : "bg-destructive"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
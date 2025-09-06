import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Target, Calendar } from "lucide-react";

interface StreakCardProps {
  currentStreak: number;
  bestStreak: number;
  streakType: "attendance" | "punctuality";
}

export const StreakCard = ({ currentStreak, bestStreak, streakType }: StreakCardProps) => {
  const getStreakLevel = (streak: number) => {
    if (streak >= 30) return { level: "Master", color: "bg-gradient-to-r from-yellow-400 to-orange-500" };
    if (streak >= 20) return { level: "Expert", color: "bg-gradient-to-r from-purple-400 to-pink-500" };
    if (streak >= 10) return { level: "Pro", color: "bg-gradient-to-r from-blue-400 to-cyan-500" };
    if (streak >= 5) return { level: "Good", color: "bg-gradient-to-r from-green-400 to-emerald-500" };
    return { level: "Beginner", color: "bg-gradient-to-r from-gray-400 to-gray-500" };
  };

  const streakLevel = getStreakLevel(currentStreak);

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-card to-secondary/20 shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground capitalize">
          {streakType} Streak
        </CardTitle>
        <Flame className="h-5 w-5 text-orange-500" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Streak */}
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">
              {currentStreak}
            </div>
            <p className="text-xs text-muted-foreground">days current streak</p>
            <Badge 
              className={`mt-2 text-white ${streakLevel.color} border-0`}
            >
              {streakLevel.level}
            </Badge>
          </div>

          {/* Streak visualization */}
          <div className="flex justify-center space-x-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < Math.min(currentStreak, 7) 
                    ? "bg-success" 
                    : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Best Streak */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Best:</span>
            </div>
            <span className="font-semibold text-foreground">{bestStreak} days</span>
          </div>

          {/* Progress to next level */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress to next level</span>
              <span>{Math.min(currentStreak % 10, 10)}/10</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-gradient-to-r from-success to-accent transition-all duration-500"
                style={{ width: `${(currentStreak % 10) * 10}%` }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const weeklyData = [
  { day: 'Mon', attendance: 95, classes: 4 },
  { day: 'Tue', attendance: 100, classes: 5 },
  { day: 'Wed', attendance: 80, classes: 5 },
  { day: 'Thu', attendance: 100, classes: 4 },
  { day: 'Fri', attendance: 90, classes: 6 },
  { day: 'Sat', attendance: 75, classes: 4 },
  { day: 'Sun', attendance: 0, classes: 0 }
];

export const WeeklyChart = () => {
  const getBarColor = (attendance: number) => {
    if (attendance >= 90) return 'hsl(var(--success))';
    if (attendance >= 75) return 'hsl(var(--warning))';
    if (attendance === 0) return 'hsl(var(--muted))';
    return 'hsl(var(--destructive))';
  };

  return (
    <Card className="col-span-1 md:col-span-2 bg-gradient-to-br from-card to-secondary/20 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Weekly Attendance Overview
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Your attendance percentage for each day this week
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="day" 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                color: 'hsl(var(--foreground))'
              }}
              formatter={(value, name) => [
                `${value}%`,
                'Attendance'
              ]}
              labelFormatter={(label) => `${label}`}
            />
            <Bar dataKey="attendance" radius={[4, 4, 0, 0]}>
              {weeklyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.attendance)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-success">87%</div>
            <div className="text-xs text-muted-foreground">Weekly Average</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-foreground">28</div>
            <div className="text-xs text-muted-foreground">Total Classes</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-accent">24</div>
            <div className="text-xs text-muted-foreground">Classes Attended</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
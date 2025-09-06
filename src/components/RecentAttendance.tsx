import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, BookOpen } from "lucide-react";

const recentAttendanceData = [
  {
    id: 1,
    subject: "Computer Science",
    date: "2024-01-15",
    time: "09:00 AM",
    status: "present",
    professor: "Dr. Smith"
  },
  {
    id: 2,
    subject: "Mathematics",
    date: "2024-01-15",
    time: "11:00 AM",
    status: "present",
    professor: "Prof. Johnson"
  },
  {
    id: 3,
    subject: "Physics",
    date: "2024-01-14",
    time: "02:00 PM",
    status: "absent",
    professor: "Dr. Brown"
  },
  {
    id: 4,
    subject: "English",
    date: "2024-01-14",
    time: "10:00 AM",
    status: "late",
    professor: "Ms. Davis"
  },
  {
    id: 5,
    subject: "Chemistry",
    date: "2024-01-13",
    time: "01:00 PM",
    status: "present",
    professor: "Dr. Wilson"
  }
];

export const RecentAttendance = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "absent":
        return <XCircle className="h-4 w-4 text-destructive" />;
      case "late":
        return <Clock className="h-4 w-4 text-warning" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge variant="outline" className="text-success border-success/20 bg-success/10">Present</Badge>;
      case "absent":
        return <Badge variant="outline" className="text-destructive border-destructive/20 bg-destructive/10">Absent</Badge>;
      case "late":
        return <Badge variant="outline" className="text-warning border-warning/20 bg-warning/10">Late</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card className="bg-gradient-to-br from-card to-secondary/20 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center space-x-2">
          <BookOpen className="h-5 w-5" />
          <span>Recent Attendance</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Your latest class attendance records
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentAttendanceData.map((record) => (
            <div
              key={record.id}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {getStatusIcon(record.status)}
                <div>
                  <div className="font-medium text-foreground">{record.subject}</div>
                  <div className="text-sm text-muted-foreground">
                    {record.professor} • {record.time}
                  </div>
                </div>
              </div>
              <div className="text-right">
                {getStatusBadge(record.status)}
                <div className="text-xs text-muted-foreground mt-1">
                  {new Date(record.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
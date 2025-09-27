import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Building2, FileCheck, AlertTriangle, TrendingUp, Download, Settings, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/layout/DashboardLayout";

const AdminDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Users",
      value: "12,543",
      change: "+12%",
      trend: "up",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Partner Institutions",
      value: "456",
      change: "+8%",
      trend: "up", 
      icon: Building2,
      color: "text-green-600"
    },
    {
      title: "Verified Certificates",
      value: "98,234",
      change: "+24%",
      trend: "up",
      icon: FileCheck,
      color: "text-purple-600"
    },
    {
      title: "Pending Reviews",
      value: "23",
      change: "-15%",
      trend: "down",
      icon: AlertTriangle,
      color: "text-orange-600"
    }
  ];

  const recentActivity = [
    { type: "Institution Registration", name: "MIT University", time: "2 hours ago", status: "pending" },
    { type: "Certificate Verified", name: "John Smith - Computer Science", time: "5 hours ago", status: "success" },
    { type: "Fraudulent Certificate Reported", name: "Fake University Degree", time: "1 day ago", status: "warning" },
    { type: "Bulk Upload Completed", name: "Harvard University - 1,200 certificates", time: "2 days ago", status: "success" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'bg-green-500';
      case 'warning': return 'bg-orange-500';
      case 'pending': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <DashboardLayout title="Admin Dashboard" subtitle={`Welcome back, ${user?.name}`}>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift shadow-card">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span className="text-green-600 font-medium">{stat.change}</span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recent Activity
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </CardTitle>
              <CardDescription>
                Latest system activities and notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(activity.status)}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground">
                        {activity.type}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {activity.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {activity.time}
                      </p>
                    </div>
                    <Badge variant={activity.status === 'success' ? 'default' : 
                                   activity.status === 'warning' ? 'destructive' : 'secondary'}>
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Manage system operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-all">
                <Users className="w-4 h-4 mr-2" />
                Manage Users
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Building2 className="w-4 h-4 mr-2" />
                Review Institutions
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileCheck className="w-4 h-4 mr-2" />
                Certificate Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Security Reports
              </Button>
              <div className="pt-4 border-t">
                <Button className="w-full justify-start" variant="ghost">
                  <Settings className="w-4 h-4 mr-2" />
                  System Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Health */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>System Health & Performance</CardTitle>
            <CardDescription>
              Real-time system monitoring and performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">2.4s</div>
                <div className="text-sm text-muted-foreground">Avg Response Time</div>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">1,234</div>
                <div className="text-sm text-muted-foreground">Active Sessions</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
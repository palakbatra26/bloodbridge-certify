import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Upload, Users, FileCheck, Clock, AlertCircle, Download, Search } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/layout/DashboardLayout";

const InstitutionDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Total Certificates Issued",
      value: "15,432",
      change: "+234",
      period: "this month",
      icon: FileCheck,
      color: "text-blue-600"
    },
    {
      title: "Active Students",
      value: "3,567",
      change: "+89",
      period: "this semester", 
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Pending Requests",
      value: "42",
      change: "-12",
      period: "since yesterday",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Verification Rate",
      value: "99.8%",
      change: "+0.2%",
      period: "vs last month",
      icon: AlertCircle,
      color: "text-purple-600"
    }
  ];

  const recentRequests = [
    {
      id: "REQ_001",
      studentName: "Alice Johnson",
      studentId: "ST2024001",
      certificateType: "Bachelor of Science - Computer Science",
      requestDate: "2024-01-15",
      status: "pending",
      priority: "normal"
    },
    {
      id: "REQ_002", 
      studentName: "Bob Smith",
      studentId: "ST2024002",
      certificateType: "Master of Arts - Psychology",
      requestDate: "2024-01-14",
      status: "approved",
      priority: "high"
    },
    {
      id: "REQ_003",
      studentName: "Carol Brown",
      studentId: "ST2024003", 
      certificateType: "PhD - Physics",
      requestDate: "2024-01-13",
      status: "review",
      priority: "normal"
    },
    {
      id: "REQ_004",
      studentName: "David Wilson",
      studentId: "ST2024004",
      certificateType: "Bachelor of Arts - English Literature", 
      requestDate: "2024-01-12",
      status: "issued",
      priority: "low"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
      case 'issued': return 'bg-green-500';
      case 'review': return 'bg-blue-500'; 
      case 'pending': return 'bg-orange-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'approved':
      case 'issued': return 'default';
      case 'review': return 'secondary';
      case 'pending': return 'secondary';
      case 'rejected': return 'destructive'; 
      default: return 'outline';
    }
  };

  return (
    <DashboardLayout 
      title="Institution Dashboard" 
      subtitle={`${user?.institutionName || 'Institution'} - Certificate Management Portal`}
    >
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
                <div className="text-sm text-muted-foreground">
                  <span className="text-green-600 font-medium">{stat.change}</span>
                  {' '}{stat.period}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover-lift shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2 text-primary" />
                Issue New Certificate
              </CardTitle>
              <CardDescription>
                Create and issue a new certificate for a student
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all">
                Start Issuance Process
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2 text-secondary" />
                Bulk Upload
              </CardTitle>
              <CardDescription>
                Upload multiple certificates via CSV or Excel file
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Upload File
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="w-5 h-5 mr-2 text-accent" />
                Export Reports
              </CardTitle>
              <CardDescription>
                Generate and download institutional reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Certificate Requests */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Recent Certificate Requests</CardTitle>
                <CardDescription>Manage pending and approved certificate requests</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search requests..." className="pl-10 w-full sm:w-64" />
                </div>
                <Button variant="outline">
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(request.status)}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-medium text-sm text-foreground">
                          {request.studentName}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {request.studentId}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {request.certificateType}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Requested on {new Date(request.requestDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Badge variant={getStatusVariant(request.status)}>
                      {request.status}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all">
                        Process
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Issuance Analytics</CardTitle>
              <CardDescription>
                Certificate issuance trends and statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">1,234</div>
                  <div className="text-sm text-muted-foreground">This Month</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">98.5%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">2.1 days</div>
                  <div className="text-sm text-muted-foreground">Avg Processing</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">42</div>
                  <div className="text-sm text-muted-foreground">In Queue</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Student Engagement</CardTitle>
              <CardDescription>
                Student activity and certificate usage metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Students</span>
                  <span className="font-medium">3,567</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Certificate Downloads</span>
                  <span className="font-medium">12,345</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Verification Requests</span>
                  <span className="font-medium">8,902</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Shared Portfolios</span>
                  <span className="font-medium">2,134</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InstitutionDashboard;
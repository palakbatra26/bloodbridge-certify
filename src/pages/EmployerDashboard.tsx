import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { QrCode, Search, FileCheck, Users, Clock, TrendingUp, Camera, Upload } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CertificateCard from "@/components/certificates/CertificateCard";

const EmployerDashboard = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: "Certificates Verified",
      value: "2,543",
      change: "+89",
      period: "this month",
      icon: FileCheck,
      color: "text-green-600"
    },
    {
      title: "Candidates Screened", 
      value: "1,234",
      change: "+156",
      period: "this quarter",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Avg Verification Time",
      value: "12s",
      change: "-3s",
      period: "improved",
      icon: Clock,
      color: "text-purple-600"
    },
    {
      title: "Success Rate",
      value: "98.7%",
      change: "+1.2%",
      period: "vs last month", 
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const recentVerifications = [
    {
      id: "ver_001",
      candidateName: "John Smith",
      title: "Bachelor of Computer Science",
      institution: "MIT",
      verificationDate: "2024-01-15T10:30:00Z",
      status: "verified",
      jobPosition: "Software Engineer"
    },
    {
      id: "ver_002",
      candidateName: "Sarah Johnson", 
      title: "Master of Business Administration",
      institution: "Harvard Business School",
      verificationDate: "2024-01-14T14:20:00Z",
      status: "verified",
      jobPosition: "Product Manager"
    },
    {
      id: "ver_003",
      candidateName: "Michael Brown",
      title: "Data Science Certificate",
      institution: "Stanford University",
      verificationDate: "2024-01-13T09:15:00Z", 
      status: "invalid",
      jobPosition: "Data Analyst"
    },
    {
      id: "ver_004",
      candidateName: "Emily Davis",
      title: "Full Stack Development Bootcamp",
      institution: "General Assembly",
      verificationDate: "2024-01-12T16:45:00Z",
      status: "verified", 
      jobPosition: "Frontend Developer"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-500';
      case 'invalid': return 'bg-red-500';
      case 'pending': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'verified': return 'default';
      case 'invalid': return 'destructive';
      case 'pending': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <DashboardLayout 
      title="Employer Dashboard" 
      subtitle={`${user?.companyName || 'Company'} - Certificate Verification Portal`}
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
                <QrCode className="w-5 h-5 mr-2 text-primary" />
                QR Code Scanner
              </CardTitle>
              <CardDescription>
                Scan certificate QR codes for instant verification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all">
                <Camera className="w-4 h-4 mr-2" />
                Start Scanning
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="w-5 h-5 mr-2 text-secondary" />
                Manual Verification
              </CardTitle>
              <CardDescription>
                Verify certificates using credential ID or student details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Search Database
              </Button>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="w-5 h-5 mr-2 text-accent" />
                Bulk Verification
              </CardTitle>
              <CardDescription>
                Upload and verify multiple certificates at once
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Upload File
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* QR Scanner Interface */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <QrCode className="w-5 h-5 mr-2" />
              Quick Verification
            </CardTitle>
            <CardDescription>
              Scan a certificate QR code or enter credential ID manually
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* QR Scanner Area */}
              <div className="space-y-4">
                <div className="aspect-square bg-muted/30 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">Position QR code within the frame</p>
                    <Button className="bg-gradient-primary hover:shadow-glow transition-all">
                      <Camera className="w-4 h-4 mr-2" />
                      Activate Camera
                    </Button>
                  </div>
                </div>
              </div>

              {/* Manual Entry */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Certificate Credential ID
                  </label>
                  <Input 
                    placeholder="Enter credential ID (e.g., HU-CS-2024-001234)"
                    className="mb-3"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Candidate Name (Optional)
                  </label>
                  <Input 
                    placeholder="Enter candidate name"
                    className="mb-4"
                  />
                </div>
                <Button className="w-full bg-gradient-secondary hover:shadow-glow transition-all">
                  <Search className="w-4 h-4 mr-2" />
                  Verify Certificate
                </Button>
                
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground text-center">
                    Verification results will appear instantly with detailed certificate information
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Verifications */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Recent Verifications</CardTitle>
                <CardDescription>Certificate verification history and candidate records</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search verifications..." className="pl-10 w-full sm:w-64" />
                </div>
                <Button variant="outline">
                  Export Report
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVerifications.map((verification) => (
                <div key={verification.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(verification.status)}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-medium text-sm text-foreground">
                          {verification.candidateName}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          {verification.jobPosition}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {verification.title} - {verification.institution}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Verified on {new Date(verification.verificationDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Badge variant={getStatusVariant(verification.status)}>
                      {verification.status}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Verification Analytics</CardTitle>
              <CardDescription>
                Certificate verification trends and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">98.7%</div>
                  <div className="text-sm text-muted-foreground">Valid Rate</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">12s</div>
                  <div className="text-sm text-muted-foreground">Avg Time</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">156</div>
                  <div className="text-sm text-muted-foreground">This Week</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">89%</div>
                  <div className="text-sm text-muted-foreground">QR Scans</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Top Institutions</CardTitle>
              <CardDescription>
                Most frequently verified institutions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Harvard University</span>
                  <span className="font-medium">234 certificates</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">MIT</span>
                  <span className="font-medium">189 certificates</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Stanford University</span>
                  <span className="font-medium">156 certificates</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">UC Berkeley</span>
                  <span className="font-medium">134 certificates</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EmployerDashboard;
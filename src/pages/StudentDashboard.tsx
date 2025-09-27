import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Download, Share2, Eye, Search, GraduationCap, Calendar, MapPin } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CertificateCard from "@/components/certificates/CertificateCard";

const StudentDashboard = () => {
  const { user } = useAuth();

  const certificates = [
    {
      id: "cert_001",
      title: "Bachelor of Computer Science",
      institution: "Harvard University", 
      issueDate: "2024-05-15",
      expiryDate: null,
      status: "verified" as const,
      grade: "Magna Cum Laude",
      credentialId: "HU-CS-2024-001234",
      qrCode: "https://verify.bloodbridge.com/cert_001"
    },
    {
      id: "cert_002", 
      title: "Full Stack Web Development Certificate",
      institution: "Coursera - Meta",
      issueDate: "2023-12-10",
      expiryDate: "2026-12-10", 
      status: "verified" as const,
      grade: "95%",
      credentialId: "META-FSD-2023-5678",
      qrCode: "https://verify.bloodbridge.com/cert_002"
    },
    {
      id: "cert_003",
      title: "Data Science Specialization",
      institution: "Johns Hopkins University",
      issueDate: "2023-08-20",
      expiryDate: null,
      status: "pending" as const,
      grade: "89%", 
      credentialId: "JHU-DS-2023-9012",
      qrCode: "https://verify.bloodbridge.com/cert_003"
    }
  ];

  const stats = [
    { label: "Total Certificates", value: certificates.length, color: "text-blue-600" },
    { label: "Verified", value: certificates.filter(c => c.status === "verified").length, color: "text-green-600" },
    { label: "Pending", value: certificates.filter(c => c.status === "pending").length, color: "text-orange-600" },
    { label: "Downloads", value: "47", color: "text-purple-600" }
  ];

  return (
    <DashboardLayout title="My Certificates" subtitle={`Manage your academic credentials, ${user?.name}`}>
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card">
              <CardContent className="pt-6">
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <Card className="shadow-card">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Certificate Portfolio</CardTitle>
                <CardDescription>View and manage your verified credentials</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search certificates..." className="pl-10 w-full sm:w-64" />
                </div>
                <Button className="bg-gradient-primary hover:shadow-glow transition-all">
                  <Download className="w-4 h-4 mr-2" />
                  Export All
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {certificates.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  actions={
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  }
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Request Certificate
              </CardTitle>
              <CardDescription>
                Request a new certificate from your institution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all">
                Submit Request
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Share Portfolio
              </CardTitle>
              <CardDescription>
                Generate a shareable link to your verified certificates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Generate Link
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest certificate-related activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">Certificate Verified</p>
                    <p className="text-xs text-muted-foreground">Bachelor of Computer Science - Harvard University</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">Certificate Downloaded</p>
                    <p className="text-xs text-muted-foreground">Full Stack Web Development Certificate</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">1 day ago</span>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <div>
                    <p className="font-medium text-sm">Certificate Shared</p>
                    <p className="text-xs text-muted-foreground">Portfolio shared with Tech Corp Inc.</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">3 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
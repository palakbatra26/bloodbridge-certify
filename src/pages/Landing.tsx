import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Users, Search, ArrowRight, CheckCircle, Lock, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Landing = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated && user) {
      navigate(`/${user.role}`);
    } else {
      navigate('/login');
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Military-grade encryption and blockchain technology ensure your certificates are tamper-proof"
    },
    {
      icon: Award,
      title: "Instant Verification", 
      description: "Verify academic credentials in seconds with our QR code scanning technology"
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Designed for students, institutions, employers, and administrators with role-based permissions"
    },
    {
      icon: Search,
      title: "Global Database",
      description: "Access to a comprehensive database of verified educational institutions worldwide"
    }
  ];

  const stats = [
    { label: "Verified Certificates", value: "50,000+" },
    { label: "Partner Institutions", value: "500+" },
    { label: "Countries Supported", value: "120+" },
    { label: "Security Level", value: "99.9%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">BloodBridge</h1>
              <p className="text-xs text-muted-foreground">Certificate Verification System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <Button onClick={() => navigate(`/${user?.role}`)} className="bg-gradient-primary hover:shadow-glow transition-all">
                Go to Dashboard <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={() => navigate('/login')} variant="outline">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Secure Certificate</span>
              <br />
              <span className="text-foreground">Verification System</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Revolutionary blockchain-powered platform for issuing, managing, and verifying academic credentials with absolute security and instant access.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="bg-gradient-primary hover:shadow-glow transition-all text-lg px-8 py-4"
            >
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-bold text-primary">{stat.value}</CardTitle>
                  <CardDescription className="text-sm">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose BloodBridge?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets educational verification needs with unprecedented security and convenience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift bg-card shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, secure, and efficient verification process in three easy steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">1. Certificate Issued</h3>
              <p className="text-sm text-muted-foreground">Institution issues secure digital certificates with blockchain verification</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">2. Secure Storage</h3>
              <p className="text-sm text-muted-foreground">Certificates stored with military-grade encryption and immutable records</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">3. Instant Verification</h3>
              <p className="text-sm text-muted-foreground">Employers scan QR codes for immediate authentication and verification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your Certificates?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of institutions and students already using BloodBridge for secure certificate management.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleGetStarted}
            className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
          >
            Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">BloodBridge</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 BloodBridge. All rights reserved. Secure certificate verification for the digital age.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
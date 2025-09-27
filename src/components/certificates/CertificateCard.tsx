import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Calendar, 
  Building2, 
  QrCode, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  User
} from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  institution: string;
  issueDate: string;
  expiryDate?: string | null;
  status: 'verified' | 'pending' | 'expired' | 'invalid';
  grade?: string;
  credentialId: string;
  qrCode: string;
  studentName?: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  actions?: ReactNode;
  compact?: boolean;
}

const CertificateCard = ({ certificate, actions, compact = false }: CertificateCardProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending': return <Clock className="w-4 h-4 text-orange-600" />;
      case 'expired': 
      case 'invalid': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'expired': return 'bg-red-100 text-red-800 border-red-200';
      case 'invalid': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (compact) {
    return (
      <Card className="hover-lift shadow-card">
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 mr-4">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-4 h-4 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-sm text-foreground truncate">
                  {certificate.title}
                </h3>
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                <Building2 className="w-3 h-3" />
                <span className="truncate">{certificate.institution}</span>
              </div>
              
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(certificate.issueDate)}</span>
                </div>
                {certificate.grade && (
                  <span className="font-medium text-foreground">
                    {certificate.grade}
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex flex-col items-end space-y-2">
              <Badge className={getStatusColor(certificate.status)}>
                <div className="flex items-center space-x-1">
                  {getStatusIcon(certificate.status)}
                  <span className="capitalize">{certificate.status}</span>
                </div>
              </Badge>
              
              <Button size="sm" variant="outline" className="text-xs">
                <QrCode className="w-3 h-3 mr-1" />
                QR
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover-lift shadow-card">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0 mr-4">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">
                {certificate.title}
              </h3>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Building2 className="w-4 h-4" />
                <span>{certificate.institution}</span>
              </div>
              
              {certificate.studentName && (
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{certificate.studentName}</span>
                </div>
              )}
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {formatDate(certificate.issueDate)}</span>
                </div>
                
                {certificate.expiryDate && (
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Expires: {formatDate(certificate.expiryDate)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-3">
            <Badge className={getStatusColor(certificate.status)}>
              <div className="flex items-center space-x-1">
                {getStatusIcon(certificate.status)}
                <span className="capitalize">{certificate.status}</span>
              </div>
            </Badge>
            
            <Button size="sm" variant="outline">
              <QrCode className="w-4 h-4 mr-2" />
              View QR Code
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>
              <strong className="text-foreground">ID:</strong> {certificate.credentialId}
            </span>
            {certificate.grade && (
              <span>
                <strong className="text-foreground">Grade:</strong> {certificate.grade}
              </span>
            )}
          </div>
          
          {actions && (
            <div className="flex items-center space-x-2">
              {actions}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
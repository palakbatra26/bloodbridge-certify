import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'admin' | 'student' | 'institution' | 'employer' | 'recruiter';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  institutionName?: string;
  companyName?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock users for demo purposes
const mockUsers: User[] = [
  {
    id: '1',
    email: 'priyankalochan27@gmail.com',
    name: 'Priyanka Lochan',
    role: 'admin'
  },
  {
    id: '2',
    email: 'student@example.com',
    name: 'John Smith',
    role: 'student'
  },
  {
    id: '3',
    email: 'institution@example.com',
    name: 'University Admin',
    role: 'institution',
    institutionName: 'Harvard University'
  },
  {
    id: '4',
    email: 'employer@example.com',
    name: 'HR Manager',
    role: 'employer',
    companyName: 'Tech Corp Inc.'
  }
];

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('bloodbridge_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Mock authentication - in real app, this would be an API call
    const foundUser = mockUsers.find(u => u.email === email);
    
    // Simple mock password check
    if (foundUser && password === 'password') {
      setUser(foundUser);
      localStorage.setItem('bloodbridge_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bloodbridge_user');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
import { ReactNode } from 'react';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  GraduationCap, 
  Users, 
  UserPlus, 
  CheckSquare, 
  BarChart3,
  Home,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { DashboardView } from '@/pages/Dashboard';

interface DashboardLayoutProps {
  children: ReactNode;
  activeView: DashboardView;
  onViewChange: (view: DashboardView) => void;
}

export const DashboardLayout = ({ children, activeView, onViewChange }: DashboardLayoutProps) => {
  const { user, signOut } = useAuth();

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'courses', label: 'Courses & Curriculum', icon: BookOpen },
    { id: 'scheduling', label: 'Class Scheduling', icon: Calendar },
    { id: 'exams', label: 'Exams & Assessment', icon: FileText },
    { id: 'grading', label: 'Grading & Reports', icon: BarChart3 },
    { id: 'admissions', label: 'Student Admissions', icon: UserPlus },
    { id: 'attendance', label: 'Attendance Tracking', icon: CheckSquare },
    { id: 'students', label: 'Student Profiles', icon: Users },
  ] as const;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="text-2xl font-bold text-primary">Dugsinet</div>
          <p className="text-sm text-muted-foreground mt-1">School Management</p>
        </div>
        
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeView === item.id ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => onViewChange(item.id as DashboardView)}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="p-3 bg-gray-50 rounded-lg mb-3">
            <div className="text-sm font-medium">{user?.email}</div>
            <div className="text-xs text-muted-foreground">Administrator</div>
          </div>
          <Button variant="outline" className="w-full" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};
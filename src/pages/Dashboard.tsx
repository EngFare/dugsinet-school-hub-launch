import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { CourseManagement } from '@/components/dashboard/CourseManagement';
import { ClassScheduling } from '@/components/dashboard/ClassScheduling';
import { ExamManagement } from '@/components/dashboard/ExamManagement';
import { GradingReports } from '@/components/dashboard/GradingReports';
import { StudentAdmissions } from '@/components/dashboard/StudentAdmissions';
import { AttendanceTracking } from '@/components/dashboard/AttendanceTracking';
import { StudentProfiles } from '@/components/dashboard/StudentProfiles';

export type DashboardView = 
  | 'overview'
  | 'courses'
  | 'scheduling'
  | 'exams'
  | 'grading'
  | 'admissions'
  | 'attendance'
  | 'students';

const Dashboard = () => {
  const { user } = useAuth();
  const [activeView, setActiveView] = useState<DashboardView>('overview');

  if (!user) {
    return null;
  }

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return <DashboardOverview />;
      case 'courses':
        return <CourseManagement />;
      case 'scheduling':
        return <ClassScheduling />;
      case 'exams':
        return <ExamManagement />;
      case 'grading':
        return <GradingReports />;
      case 'admissions':
        return <StudentAdmissions />;
      case 'attendance':
        return <AttendanceTracking />;
      case 'students':
        return <StudentProfiles />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <DashboardLayout activeView={activeView} onViewChange={setActiveView}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default Dashboard;
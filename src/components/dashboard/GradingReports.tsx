import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Download, FileText, BarChart3, TrendingUp, Users } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

export const GradingReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const studentGrades = [
    {
      id: 1,
      studentId: 'STU001',
      name: 'Ahmed Hassan Mohamed',
      class: 'Grade 10A',
      subjects: {
        mathematics: { score: 85, grade: 'A', status: 'excellent' },
        english: { score: 78, grade: 'B+', status: 'good' },
        science: { score: 92, grade: 'A+', status: 'excellent' },
        history: { score: 74, grade: 'B', status: 'good' },
        arabic: { score: 88, grade: 'A', status: 'excellent' }
      },
      overall: { average: 83.4, grade: 'A', rank: 3 }
    },
    {
      id: 2,
      studentId: 'STU002',
      name: 'Fatima Omar Said',
      class: 'Grade 10A',
      subjects: {
        mathematics: { score: 95, grade: 'A+', status: 'excellent' },
        english: { score: 89, grade: 'A', status: 'excellent' },
        science: { score: 91, grade: 'A', status: 'excellent' },
        history: { score: 87, grade: 'A', status: 'excellent' },
        arabic: { score: 93, grade: 'A+', status: 'excellent' }
      },
      overall: { average: 91.0, grade: 'A+', rank: 1 }
    },
    {
      id: 3,
      studentId: 'STU003',
      name: 'Mohamed Ali Hassan',
      class: 'Grade 10A',
      subjects: {
        mathematics: { score: 72, grade: 'B', status: 'good' },
        english: { score: 68, grade: 'B-', status: 'satisfactory' },
        science: { score: 79, grade: 'B+', status: 'good' },
        history: { score: 81, grade: 'A-', status: 'good' },
        arabic: { score: 75, grade: 'B+', status: 'good' }
      },
      overall: { average: 75.0, grade: 'B+', rank: 8 }
    }
  ];

  const classStats = {
    totalStudents: 32,
    averageScore: 78.5,
    passRate: 93.8,
    excellentPerformers: 12,
    needsImprovement: 3,
    subjectPerformance: {
      mathematics: { average: 76.2, highest: 95, lowest: 45 },
      english: { average: 74.8, highest: 89, lowest: 52 },
      science: { average: 81.3, highest: 92, lowest: 58 },
      history: { average: 77.9, highest: 87, lowest: 48 },
      arabic: { average: 79.6, highest: 93, lowest: 55 }
    }
  };

  const getGradeColor = (grade: string) => {
    const colors = {
      'A+': 'text-green-700 bg-green-100',
      'A': 'text-green-600 bg-green-50',
      'A-': 'text-green-500 bg-green-50',
      'B+': 'text-blue-600 bg-blue-50',
      'B': 'text-blue-500 bg-blue-50',
      'B-': 'text-blue-400 bg-blue-50',
      'C+': 'text-yellow-600 bg-yellow-50',
      'C': 'text-yellow-500 bg-yellow-50',
      'D': 'text-orange-500 bg-orange-50',
      'F': 'text-red-600 bg-red-50'
    };
    return colors[grade] || 'text-gray-600 bg-gray-50';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'excellent': 'text-green-700',
      'good': 'text-blue-600',
      'satisfactory': 'text-yellow-600',
      'needs_improvement': 'text-red-600'
    };
    return colors[status] || 'text-gray-600';
  };

  const filteredStudents = studentGrades.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Grading & Report Cards</h1>
          <p className="text-muted-foreground">Manage grades, generate reports, and track academic performance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Reports
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Generate Report Cards
          </Button>
        </div>
      </div>

      {/* Class Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-2xl font-bold">{classStats.totalStudents}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Class Average</p>
                <p className="text-2xl font-bold text-green-600">{classStats.averageScore}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">Pass Rate</p>
                <p className="text-2xl font-bold text-blue-600">{classStats.passRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Excellent</p>
                <p className="text-2xl font-bold text-green-600">{classStats.excellentPerformers}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-red-600" />
              <div>
                <p className="text-sm text-muted-foreground">Need Help</p>
                <p className="text-2xl font-bold text-red-600">{classStats.needsImprovement}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="individual" className="space-y-6">
        <TabsList>
          <TabsTrigger value="individual">Individual Grades</TabsTrigger>
          <TabsTrigger value="class">Class Performance</TabsTrigger>
          <TabsTrigger value="subjects">Subject Analysis</TabsTrigger>
          <TabsTrigger value="reports">Report Cards</TabsTrigger>
        </TabsList>

        <TabsContent value="individual" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                <SelectItem value="grade10a">Grade 10A</SelectItem>
                <SelectItem value="grade10b">Grade 10B</SelectItem>
                <SelectItem value="grade9a">Grade 9A</SelectItem>
                <SelectItem value="grade9b">Grade 9B</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Student Grades List */}
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <Card key={student.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ID: {student.studentId} | Class: {student.class} | Rank: #{student.overall.rank}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getGradeColor(student.overall.grade)}`}>
                        {student.overall.grade}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Average: {student.overall.average}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {Object.entries(student.subjects).map(([subject, data]) => (
                      <div key={subject} className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium capitalize mb-1">{subject}</p>
                        <p className="text-2xl font-bold">{data.score}%</p>
                        <div className={`inline-flex px-2 py-1 rounded text-xs font-medium ${getGradeColor(data.grade)}`}>
                          {data.grade}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="class" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Grade 10A Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Class Average</p>
                    <p className="text-3xl font-bold text-blue-600">{classStats.averageScore}%</p>
                    <Progress value={classStats.averageScore} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Pass Rate</p>
                    <p className="text-3xl font-bold text-green-600">{classStats.passRate}%</p>
                    <Progress value={classStats.passRate} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Excellence Rate</p>
                    <p className="text-3xl font-bold text-purple-600">37.5%</p>
                    <Progress value={37.5} className="mt-2" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Grade Distribution</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-muted-foreground">A+ & A</p>
                      <p className="text-2xl font-bold text-green-600">12</p>
                      <p className="text-xs text-muted-foreground">37.5%</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-muted-foreground">B+ & B</p>
                      <p className="text-2xl font-bold text-blue-600">15</p>
                      <p className="text-xs text-muted-foreground">46.9%</p>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-muted-foreground">C+ & C</p>
                      <p className="text-2xl font-bold text-yellow-600">3</p>
                      <p className="text-xs text-muted-foreground">9.4%</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <p className="text-sm text-muted-foreground">D</p>
                      <p className="text-2xl font-bold text-orange-600">2</p>
                      <p className="text-xs text-muted-foreground">6.2%</p>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <p className="text-sm text-muted-foreground">F</p>
                      <p className="text-2xl font-bold text-red-600">0</p>
                      <p className="text-xs text-muted-foreground">0%</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(classStats.subjectPerformance).map(([subject, stats]) => (
              <Card key={subject}>
                <CardHeader>
                  <CardTitle className="capitalize">{subject}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Class Average</p>
                      <p className="text-2xl font-bold">{stats.average}%</p>
                      <Progress value={stats.average} className="mt-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-muted-foreground">Highest</p>
                        <p className="text-lg font-bold text-green-600">{stats.highest}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-muted-foreground">Lowest</p>
                        <p className="text-lg font-bold text-red-600">{stats.lowest}%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Report Card Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="term1">First Term</SelectItem>
                      <SelectItem value="term2">Second Term</SelectItem>
                      <SelectItem value="term3">Third Term</SelectItem>
                      <SelectItem value="annual">Annual Report</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      <SelectItem value="grade10a">Grade 10A</SelectItem>
                      <SelectItem value="grade10b">Grade 10B</SelectItem>
                      <SelectItem value="grade9a">Grade 9A</SelectItem>
                      <SelectItem value="grade9b">Grade 9B</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Reports
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <FileText className="h-6 w-6 mb-2" />
                    <span>Individual Report Cards</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <BarChart3 className="h-6 w-6 mb-2" />
                    <span>Class Performance Report</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    <span>Progress Report</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                    <Download className="h-6 w-6 mb-2" />
                    <span>Export to PDF</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
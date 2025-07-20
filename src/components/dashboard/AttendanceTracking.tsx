import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Search, CheckCircle, XCircle, Clock, Users } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const AttendanceTracking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedClass, setSelectedClass] = useState('');

  const classes = [
    { id: '10a', name: 'Grade 10A', students: 32 },
    { id: '10b', name: 'Grade 10B', students: 28 },
    { id: '9a', name: 'Grade 9A', students: 30 },
    { id: '9b', name: 'Grade 9B', students: 25 },
  ];

  const attendanceData = [
    {
      id: 1,
      studentId: 'STU001',
      name: 'Ahmed Hassan Mohamed',
      class: 'Grade 10A',
      status: 'present',
      checkInTime: '08:15',
      checkOutTime: '14:30'
    },
    {
      id: 2,
      studentId: 'STU002',
      name: 'Fatima Omar Said',
      class: 'Grade 10A',
      status: 'present',
      checkInTime: '08:10',
      checkOutTime: '14:25'
    },
    {
      id: 3,
      studentId: 'STU003',
      name: 'Mohamed Ali Hassan',
      class: 'Grade 10A',
      status: 'absent',
      checkInTime: null,
      checkOutTime: null
    },
    {
      id: 4,
      studentId: 'STU004',
      name: 'Amina Yusuf Ahmed',
      class: 'Grade 10A',
      status: 'tardy',
      checkInTime: '08:45',
      checkOutTime: '14:30'
    },
    {
      id: 5,
      studentId: 'STU005',
      name: 'Abdullahi Omar Hassan',
      class: 'Grade 10A',
      status: 'excused',
      checkInTime: null,
      checkOutTime: null
    }
  ];

  const attendanceStats = {
    totalStudents: 32,
    present: 25,
    absent: 4,
    tardy: 2,
    excused: 1,
    attendanceRate: 78.1
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'absent':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'tardy':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'excused':
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return <Badge className="bg-green-100 text-green-800">Present</Badge>;
      case 'absent':
        return <Badge variant="destructive">Absent</Badge>;
      case 'tardy':
        return <Badge className="bg-yellow-100 text-yellow-800">Tardy</Badge>;
      case 'excused':
        return <Badge className="bg-blue-100 text-blue-800">Excused</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Tracking</h1>
          <p className="text-muted-foreground">Monitor and manage student attendance</p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Mark Attendance
        </Button>
      </div>

      {/* Date and Class Selection */}
      <div className="flex space-x-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Date</label>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-48"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Class</label>
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              {classes.map((cls) => (
                <SelectItem key={cls.id} value={cls.id}>
                  {cls.name} ({cls.students} students)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="daily" className="space-y-6">
        <TabsList>
          <TabsTrigger value="daily">Daily Attendance</TabsTrigger>
          <TabsTrigger value="summary">Attendance Summary</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="daily" className="space-y-6">
          {/* Attendance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">{attendanceStats.totalStudents}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Present</p>
                    <p className="text-2xl font-bold text-green-600">{attendanceStats.present}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Absent</p>
                    <p className="text-2xl font-bold text-red-600">{attendanceStats.absent}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Tardy</p>
                    <p className="text-2xl font-bold text-yellow-600">{attendanceStats.tardy}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="text-sm text-muted-foreground">Rate</p>
                    <p className="text-2xl font-bold text-blue-600">{attendanceStats.attendanceRate}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Student Attendance List */}
          <Card>
            <CardHeader>
              <CardTitle>Grade 10A - {selectedDate}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendanceData.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(student.status)}
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">ID: {student.studentId}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {student.checkInTime && (
                        <div className="text-sm">
                          <p className="text-muted-foreground">Check In</p>
                          <p className="font-medium">{student.checkInTime}</p>
                        </div>
                      )}
                      {student.checkOutTime && (
                        <div className="text-sm">
                          <p className="text-muted-foreground">Check Out</p>
                          <p className="font-medium">{student.checkOutTime}</p>
                        </div>
                      )}
                      {getStatusBadge(student.status)}
                      <Select defaultValue={student.status}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="present">Present</SelectItem>
                          <SelectItem value="absent">Absent</SelectItem>
                          <SelectItem value="tardy">Tardy</SelectItem>
                          <SelectItem value="excused">Excused</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-6">
                <Button>Save Attendance</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summary" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls) => (
              <Card key={cls.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{cls.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Students:</span>
                      <span className="font-medium">{cls.students}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Present Today:</span>
                      <span className="font-medium text-green-600">
                        {Math.floor(cls.students * 0.85)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Attendance Rate:</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
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
              <CardTitle>Attendance Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span>Daily Report</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span>Weekly Report</span>
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span>Monthly Report</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, Clock, Users, Edit, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const ClassScheduling = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState('current');

  const timeSlots = [
    '08:00 - 08:45',
    '08:45 - 09:30',
    '09:30 - 10:15',
    '10:15 - 10:30', // Break
    '10:30 - 11:15',
    '11:15 - 12:00',
    '12:00 - 12:45',
    '12:45 - 13:30', // Lunch
    '13:30 - 14:15',
    '14:15 - 15:00'
  ];

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const schedule = {
    'Monday': {
      '08:00 - 08:45': { subject: 'Mathematics', teacher: 'Ahmed Hassan', room: 'Room 101', class: 'Grade 10A' },
      '08:45 - 09:30': { subject: 'English', teacher: 'Fatima Omar', room: 'Room 102', class: 'Grade 10A' },
      '09:30 - 10:15': { subject: 'Science', teacher: 'Mohamed Ali', room: 'Lab 1', class: 'Grade 10A' },
      '10:30 - 11:15': { subject: 'History', teacher: 'Amina Yusuf', room: 'Room 103', class: 'Grade 10A' },
      '11:15 - 12:00': { subject: 'Arabic', teacher: 'Omar Said', room: 'Room 104', class: 'Grade 10A' },
      '12:00 - 12:45': { subject: 'Physical Education', teacher: 'Hassan Mohamed', room: 'Gym', class: 'Grade 10A' },
      '13:30 - 14:15': { subject: 'Art', teacher: 'Khadija Ali', room: 'Art Room', class: 'Grade 10A' },
      '14:15 - 15:00': { subject: 'Computer Science', teacher: 'Abdullahi Omar', room: 'Computer Lab', class: 'Grade 10A' }
    },
    'Tuesday': {
      '08:00 - 08:45': { subject: 'Science', teacher: 'Mohamed Ali', room: 'Lab 1', class: 'Grade 10A' },
      '08:45 - 09:30': { subject: 'Mathematics', teacher: 'Ahmed Hassan', room: 'Room 101', class: 'Grade 10A' },
      '09:30 - 10:15': { subject: 'English', teacher: 'Fatima Omar', room: 'Room 102', class: 'Grade 10A' },
      '10:30 - 11:15': { subject: 'Geography', teacher: 'Yusuf Ahmed', room: 'Room 105', class: 'Grade 10A' },
      '11:15 - 12:00': { subject: 'Islamic Studies', teacher: 'Ali Hassan', room: 'Room 106', class: 'Grade 10A' },
      '12:00 - 12:45': { subject: 'Mathematics', teacher: 'Ahmed Hassan', room: 'Room 101', class: 'Grade 10A' },
      '13:30 - 14:15': { subject: 'Music', teacher: 'Sahra Mohamed', room: 'Music Room', class: 'Grade 10A' },
      '14:15 - 15:00': { subject: 'Study Hall', teacher: 'Various', room: 'Library', class: 'Grade 10A' }
    },
    'Wednesday': {
      '08:00 - 08:45': { subject: 'English', teacher: 'Fatima Omar', room: 'Room 102', class: 'Grade 10A' },
      '08:45 - 09:30': { subject: 'Science', teacher: 'Mohamed Ali', room: 'Lab 1', class: 'Grade 10A' },
      '09:30 - 10:15': { subject: 'Mathematics', teacher: 'Ahmed Hassan', room: 'Room 101', class: 'Grade 10A' },
      '10:30 - 11:15': { subject: 'Arabic', teacher: 'Omar Said', room: 'Room 104', class: 'Grade 10A' },
      '11:15 - 12:00': { subject: 'History', teacher: 'Amina Yusuf', room: 'Room 103', class: 'Grade 10A' },
      '12:00 - 12:45': { subject: 'Physical Education', teacher: 'Hassan Mohamed', room: 'Gym', class: 'Grade 10A' },
      '13:30 - 14:15': { subject: 'Computer Science', teacher: 'Abdullahi Omar', room: 'Computer Lab', class: 'Grade 10A' },
      '14:15 - 15:00': { subject: 'Library Time', teacher: 'Librarian', room: 'Library', class: 'Grade 10A' }
    },
    'Thursday': {
      '08:00 - 08:45': { subject: 'Mathematics', teacher: 'Ahmed Hassan', room: 'Room 101', class: 'Grade 10A' },
      '08:45 - 09:30': { subject: 'Geography', teacher: 'Yusuf Ahmed', room: 'Room 105', class: 'Grade 10A' },
      '09:30 - 10:15': { subject: 'English', teacher: 'Fatima Omar', room: 'Room 102', class: 'Grade 10A' },
      '10:30 - 11:15': { subject: 'Science', teacher: 'Mohamed Ali', room: 'Lab 1', class: 'Grade 10A' },
      '11:15 - 12:00': { subject: 'Islamic Studies', teacher: 'Ali Hassan', room: 'Room 106', class: 'Grade 10A' },
      '12:00 - 12:45': { subject: 'Art', teacher: 'Khadija Ali', room: 'Art Room', class: 'Grade 10A' },
      '13:30 - 14:15': { subject: 'Arabic', teacher: 'Omar Said', room: 'Room 104', class: 'Grade 10A' },
      '14:15 - 15:00': { subject: 'Career Guidance', teacher: 'Counselor', room: 'Counseling Office', class: 'Grade 10A' }
    },
    'Friday': {
      '08:00 - 08:45': { subject: 'Islamic Studies', teacher: 'Ali Hassan', room: 'Room 106', class: 'Grade 10A' },
      '08:45 - 09:30': { subject: 'Arabic', teacher: 'Omar Said', room: 'Room 104', class: 'Grade 10A' },
      '09:30 - 10:15': { subject: 'Mathematics', teacher: 'Ahmed Hassan', room: 'Room 101', class: 'Grade 10A' },
      '10:30 - 11:15': { subject: 'English', teacher: 'Fatima Omar', room: 'Room 102', class: 'Grade 10A' },
      '11:15 - 12:00': { subject: 'Science', teacher: 'Mohamed Ali', room: 'Lab 1', class: 'Grade 10A' },
      '12:00 - 12:45': { subject: 'Assembly', teacher: 'All Teachers', room: 'Main Hall', class: 'All Classes' }
    }
  };

  const classes = [
    { id: 'grade10a', name: 'Grade 10A', students: 32, teacher: 'Ahmed Hassan' },
    { id: 'grade10b', name: 'Grade 10B', students: 28, teacher: 'Fatima Omar' },
    { id: 'grade9a', name: 'Grade 9A', students: 30, teacher: 'Mohamed Ali' },
    { id: 'grade9b', name: 'Grade 9B', students: 25, teacher: 'Amina Yusuf' }
  ];

  const getSubjectColor = (subject: string) => {
    const colors = {
      'Mathematics': 'bg-blue-100 text-blue-800',
      'English': 'bg-green-100 text-green-800',
      'Science': 'bg-purple-100 text-purple-800',
      'History': 'bg-orange-100 text-orange-800',
      'Arabic': 'bg-red-100 text-red-800',
      'Physical Education': 'bg-yellow-100 text-yellow-800',
      'Art': 'bg-pink-100 text-pink-800',
      'Computer Science': 'bg-indigo-100 text-indigo-800',
      'Geography': 'bg-teal-100 text-teal-800',
      'Islamic Studies': 'bg-emerald-100 text-emerald-800',
      'Music': 'bg-violet-100 text-violet-800'
    };
    return colors[subject] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Class & Section Scheduling</h1>
          <p className="text-muted-foreground">Manage class schedules and timetables</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Schedule
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Class Schedule</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="class">Class/Section</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id}>
                        {cls.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter subject name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="teacher">Teacher</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ahmed">Ahmed Hassan</SelectItem>
                    <SelectItem value="fatima">Fatima Omar</SelectItem>
                    <SelectItem value="mohamed">Mohamed Ali</SelectItem>
                    <SelectItem value="amina">Amina Yusuf</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="room">Room</Label>
                <Input id="room" placeholder="Enter room number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="day">Day</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent>
                    {weekDays.map((day) => (
                      <SelectItem key={day} value={day.toLowerCase()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time Slot</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>
                Add Schedule
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="timetable" className="space-y-6">
        <TabsList>
          <TabsTrigger value="timetable">Weekly Timetable</TabsTrigger>
          <TabsTrigger value="classes">Class Management</TabsTrigger>
          <TabsTrigger value="teachers">Teacher Schedules</TabsTrigger>
        </TabsList>

        <TabsContent value="timetable" className="space-y-6">
          {/* Week Selection */}
          <div className="flex items-center space-x-4">
            <Select value={selectedWeek} onValueChange={setSelectedWeek}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Week</SelectItem>
                <SelectItem value="next">Next Week</SelectItem>
                <SelectItem value="previous">Previous Week</SelectItem>
              </SelectContent>
            </Select>
            <Badge variant="outline">Grade 10A</Badge>
          </div>

          {/* Timetable Grid */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule - Grade 10A</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 bg-gray-50 text-left font-medium">Time</th>
                      {weekDays.map((day) => (
                        <th key={day} className="border p-2 bg-gray-50 text-center font-medium min-w-32">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {timeSlots.map((timeSlot) => (
                      <tr key={timeSlot}>
                        <td className="border p-2 font-medium text-sm bg-gray-50">
                          {timeSlot}
                        </td>
                        {weekDays.map((day) => {
                          const classData = schedule[day]?.[timeSlot];
                          const isBreak = timeSlot === '10:15 - 10:30' || timeSlot === '12:45 - 13:30';
                          
                          if (isBreak) {
                            return (
                              <td key={`${day}-${timeSlot}`} className="border p-2 text-center bg-yellow-50">
                                <span className="text-sm text-yellow-700 font-medium">
                                  {timeSlot === '10:15 - 10:30' ? 'Break' : 'Lunch'}
                                </span>
                              </td>
                            );
                          }
                          
                          return (
                            <td key={`${day}-${timeSlot}`} className="border p-1">
                              {classData ? (
                                <div className={`p-2 rounded text-xs ${getSubjectColor(classData.subject)}`}>
                                  <div className="font-medium">{classData.subject}</div>
                                  <div className="text-xs opacity-75">{classData.teacher}</div>
                                  <div className="text-xs opacity-75">{classData.room}</div>
                                </div>
                              ) : (
                                <div className="p-2 text-center text-gray-400 text-xs">
                                  Free
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="classes" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <Card key={cls.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{cls.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">Class Teacher: {cls.teacher}</p>
                    </div>
                    <Badge variant="outline">{cls.students} students</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        Enrollment:
                      </span>
                      <span className="font-medium">{cls.students}/35</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Classes/Week:
                      </span>
                      <span className="font-medium">30 periods</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Daily Hours:
                      </span>
                      <span className="font-medium">6 hours</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="teachers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ahmed Hassan - Mathematics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Monday:</span>
                    <span>5 periods</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tuesday:</span>
                    <span>4 periods</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Wednesday:</span>
                    <span>3 periods</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Thursday:</span>
                    <span>4 periods</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Friday:</span>
                    <span>2 periods</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Total Weekly Load:</span>
                      <span>18 periods</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fatima Omar - English</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Monday:</span>
                    <span>4 periods</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tuesday:</span>
                    <span>3 periods</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Wednesday:</span>
                    <span>4 periods</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Thursday:</span>
                    <span>3 periods</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Friday:</span>
                    <span>2 periods</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Total Weekly Load:</span>
                      <span>16 periods</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
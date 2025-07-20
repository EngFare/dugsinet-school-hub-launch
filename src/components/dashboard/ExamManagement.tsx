import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Calendar, Clock, FileText, Edit, Eye, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const ExamManagement = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const exams = [
    {
      id: 1,
      title: 'Mathematics Midterm Exam',
      titleSo: 'Imtixaanka Dhexe ee Xisaabta',
      course: 'Mathematics',
      grade: 'Grade 10',
      section: 'A',
      type: 'midterm',
      date: '2024-02-15',
      startTime: '09:00',
      endTime: '11:00',
      venue: 'Main Hall',
      totalMarks: 100,
      passingMarks: 50,
      status: 'scheduled',
      studentsEnrolled: 32,
      invigilators: ['Ahmed Hassan', 'Fatima Omar']
    },
    {
      id: 2,
      title: 'English Literature Quiz',
      titleSo: 'Su\'aal Celinta Suugaanta Ingiriisiga',
      course: 'English',
      grade: 'Grade 10',
      section: 'A',
      type: 'quiz',
      date: '2024-02-12',
      startTime: '10:00',
      endTime: '10:45',
      venue: 'Room 102',
      totalMarks: 25,
      passingMarks: 15,
      status: 'completed',
      studentsEnrolled: 32,
      invigilators: ['Fatima Omar']
    },
    {
      id: 3,
      title: 'Science Final Exam',
      titleSo: 'Imtixaanka Dhammaadka ee Sayniska',
      course: 'Science',
      grade: 'Grade 9',
      section: 'B',
      type: 'final',
      date: '2024-02-20',
      startTime: '08:00',
      endTime: '11:00',
      venue: 'Science Lab',
      totalMarks: 150,
      passingMarks: 75,
      status: 'draft',
      studentsEnrolled: 25,
      invigilators: ['Mohamed Ali', 'Amina Yusuf']
    }
  ];

  const examTypes = [
    { value: 'quiz', label: 'Quiz' },
    { value: 'midterm', label: 'Midterm' },
    { value: 'final', label: 'Final Exam' },
    { value: 'assignment', label: 'Assignment' },
    { value: 'project', label: 'Project' },
    { value: 'oral', label: 'Oral Exam' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'draft':
        return <Badge variant="secondary">Draft</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">Cancelled</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'quiz': 'text-green-600',
      'midterm': 'text-blue-600',
      'final': 'text-red-600',
      'assignment': 'text-purple-600',
      'project': 'text-orange-600',
      'oral': 'text-teal-600'
    };
    return colors[type] || 'text-gray-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Exam Timetables & Assessment</h1>
          <p className="text-muted-foreground">Manage exams, assessments, and evaluation schedules</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Exam
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Create New Exam</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="titleEn">Exam Title (English)</Label>
                <Input id="titleEn" placeholder="Enter exam title in English" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="titleSo">Exam Title (Somali)</Label>
                <Input id="titleSo" placeholder="Enter exam title in Somali" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Course/Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                    <SelectItem value="arabic">Arabic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="examType">Exam Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select exam type" />
                  </SelectTrigger>
                  <SelectContent>
                    {examTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="grade">Grade Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade9">Grade 9</SelectItem>
                    <SelectItem value="grade10">Grade 10</SelectItem>
                    <SelectItem value="grade11">Grade 11</SelectItem>
                    <SelectItem value="grade12">Grade 12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="section">Section</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a">Section A</SelectItem>
                    <SelectItem value="b">Section B</SelectItem>
                    <SelectItem value="c">Section C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="examDate">Exam Date</Label>
                <Input id="examDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startTime">Start Time</Label>
                <Input id="startTime" type="time" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endTime">End Time</Label>
                <Input id="endTime" type="time" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="venue">Venue</Label>
                <Input id="venue" placeholder="Enter exam venue" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="totalMarks">Total Marks</Label>
                <Input id="totalMarks" type="number" placeholder="100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="passingMarks">Passing Marks</Label>
                <Input id="passingMarks" type="number" placeholder="50" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="instructions">Instructions (English)</Label>
                <Textarea id="instructions" placeholder="Enter exam instructions in English" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="instructionsSo">Instructions (Somali)</Label>
                <Textarea id="instructionsSo" placeholder="Enter exam instructions in Somali" />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>
                Create Exam
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
          <TabsTrigger value="completed">Completed Exams</TabsTrigger>
          <TabsTrigger value="timetable">Exam Timetable</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.filter(exam => exam.status !== 'completed').map((exam) => (
              <Card key={exam.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{exam.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{exam.titleSo}</p>
                    </div>
                    {getStatusBadge(exam.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Course:</span>
                      <span className="font-medium">{exam.course}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Class:</span>
                      <span className="font-medium">{exam.grade} - {exam.section}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <span className={`font-medium capitalize ${getTypeColor(exam.type)}`}>
                        {exam.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Date:
                      </span>
                      <span className="font-medium">{exam.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Time:
                      </span>
                      <span className="font-medium">{exam.startTime} - {exam.endTime}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Venue:</span>
                      <span className="font-medium">{exam.venue}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Marks:</span>
                      <span className="font-medium">{exam.totalMarks} (Pass: {exam.passingMarks})</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        Students:
                      </span>
                      <span className="font-medium">{exam.studentsEnrolled}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="space-y-4">
            {exams.filter(exam => exam.status === 'completed').map((exam) => (
              <Card key={exam.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold">{exam.title}</h3>
                        {getStatusBadge(exam.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">{exam.titleSo}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span>{exam.course} - {exam.grade} {exam.section}</span>
                        <span>Date: {exam.date}</span>
                        <span>Time: {exam.startTime} - {exam.endTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-3 w-3 mr-1" />
                        Results
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timetable" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Exam Timetable - February 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-2 text-sm">
                  <div className="font-medium text-center p-2 bg-gray-50 rounded">Mon</div>
                  <div className="font-medium text-center p-2 bg-gray-50 rounded">Tue</div>
                  <div className="font-medium text-center p-2 bg-gray-50 rounded">Wed</div>
                  <div className="font-medium text-center p-2 bg-gray-50 rounded">Thu</div>
                  <div className="font-medium text-center p-2 bg-gray-50 rounded">Fri</div>
                  <div className="font-medium text-center p-2 bg-gray-50 rounded">Sat</div>
                  <div className="font-medium text-center p-2 bg-gray-50 rounded">Sun</div>
                  
                  {/* Calendar days */}
                  <div className="p-2 text-center text-gray-400">29</div>
                  <div className="p-2 text-center text-gray-400">30</div>
                  <div className="p-2 text-center text-gray-400">31</div>
                  <div className="p-2 text-center">1</div>
                  <div className="p-2 text-center">2</div>
                  <div className="p-2 text-center">3</div>
                  <div className="p-2 text-center">4</div>
                  
                  <div className="p-2 text-center">5</div>
                  <div className="p-2 text-center">6</div>
                  <div className="p-2 text-center">7</div>
                  <div className="p-2 text-center">8</div>
                  <div className="p-2 text-center">9</div>
                  <div className="p-2 text-center">10</div>
                  <div className="p-2 text-center">11</div>
                  
                  <div className="p-2 text-center bg-blue-50 rounded">
                    <div className="font-medium">12</div>
                    <div className="text-xs text-blue-600">English Quiz</div>
                  </div>
                  <div className="p-2 text-center">13</div>
                  <div className="p-2 text-center">14</div>
                  <div className="p-2 text-center bg-red-50 rounded">
                    <div className="font-medium">15</div>
                    <div className="text-xs text-red-600">Math Midterm</div>
                  </div>
                  <div className="p-2 text-center">16</div>
                  <div className="p-2 text-center">17</div>
                  <div className="p-2 text-center">18</div>
                  
                  <div className="p-2 text-center">19</div>
                  <div className="p-2 text-center bg-purple-50 rounded">
                    <div className="font-medium">20</div>
                    <div className="text-xs text-purple-600">Science Final</div>
                  </div>
                  <div className="p-2 text-center">21</div>
                  <div className="p-2 text-center">22</div>
                  <div className="p-2 text-center">23</div>
                  <div className="p-2 text-center">24</div>
                  <div className="p-2 text-center">25</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
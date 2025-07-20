import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Edit, BookOpen, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export const CourseManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const courses = [
    {
      id: 1,
      code: 'MATH101',
      nameEn: 'Mathematics',
      nameSo: 'Xisaab',
      gradeLevel: 'Grade 10',
      subjectArea: 'Mathematics',
      credits: 4,
      enrolledStudents: 32,
      status: 'Active'
    },
    {
      id: 2,
      code: 'ENG101',
      nameEn: 'English Language',
      nameSo: 'Luuqadda Ingiriisiga',
      gradeLevel: 'Grade 10',
      subjectArea: 'Languages',
      credits: 3,
      enrolledStudents: 28,
      status: 'Active'
    },
    {
      id: 3,
      code: 'SCI101',
      nameEn: 'General Science',
      nameSo: 'Sayniska Guud',
      gradeLevel: 'Grade 9',
      subjectArea: 'Science',
      credits: 4,
      enrolledStudents: 25,
      status: 'Active'
    },
    {
      id: 4,
      code: 'HIST101',
      nameEn: 'History',
      nameSo: 'Taariikh',
      gradeLevel: 'Grade 11',
      subjectArea: 'Social Studies',
      credits: 3,
      enrolledStudents: 22,
      status: 'Draft'
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Course & Curriculum Management</h1>
          <p className="text-muted-foreground">Manage courses, curriculum, and learning objectives</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="courseCode">Course Code</Label>
                <Input id="courseCode" placeholder="e.g., MATH101" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gradeLevel">Grade Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kg1">KG1</SelectItem>
                    <SelectItem value="kg2">KG2</SelectItem>
                    <SelectItem value="grade1">Grade 1</SelectItem>
                    <SelectItem value="grade2">Grade 2</SelectItem>
                    <SelectItem value="grade3">Grade 3</SelectItem>
                    <SelectItem value="grade4">Grade 4</SelectItem>
                    <SelectItem value="grade5">Grade 5</SelectItem>
                    <SelectItem value="grade6">Grade 6</SelectItem>
                    <SelectItem value="grade7">Grade 7</SelectItem>
                    <SelectItem value="grade8">Grade 8</SelectItem>
                    <SelectItem value="grade9">Grade 9</SelectItem>
                    <SelectItem value="grade10">Grade 10</SelectItem>
                    <SelectItem value="grade11">Grade 11</SelectItem>
                    <SelectItem value="grade12">Grade 12</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nameEn">Course Name (English)</Label>
                <Input id="nameEn" placeholder="Course name in English" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nameSo">Course Name (Somali)</Label>
                <Input id="nameSo" placeholder="Course name in Somali" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subjectArea">Subject Area</Label>
                <Input id="subjectArea" placeholder="e.g., Mathematics, Science" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="credits">Credits</Label>
                <Input id="credits" type="number" placeholder="Number of credits" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="descriptionEn">Description (English)</Label>
                <Textarea id="descriptionEn" placeholder="Course description in English" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="descriptionSo">Description (Somali)</Label>
                <Textarea id="descriptionSo" placeholder="Course description in Somali" />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>
                Create Course
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="flex space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            <SelectItem value="kg">Kindergarten</SelectItem>
            <SelectItem value="elementary">Elementary</SelectItem>
            <SelectItem value="middle">Middle School</SelectItem>
            <SelectItem value="high">High School</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{course.nameEn}</CardTitle>
                  <p className="text-sm text-muted-foreground">{course.nameSo}</p>
                  <p className="text-sm font-medium text-primary mt-1">{course.code}</p>
                </div>
                <Badge variant={course.status === 'Active' ? 'default' : 'secondary'}>
                  {course.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Grade Level:</span>
                  <span className="font-medium">{course.gradeLevel}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subject Area:</span>
                  <span className="font-medium">{course.subjectArea}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Credits:</span>
                  <span className="font-medium">{course.credits}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    Enrolled:
                  </span>
                  <span className="font-medium">{course.enrolledStudents}</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Curriculum
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
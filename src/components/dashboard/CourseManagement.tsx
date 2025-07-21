import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Edit, BookOpen, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Course {
  id: string;
  code: string;
  name_en: string;
  name_so: string;
  description_en?: string;
  description_so?: string;
  grade_level: string;
  subject_area: string;
  credits: number;
  is_active: boolean;
}

export const CourseManagement = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [newCourse, setNewCourse] = useState({
    code: '',
    name_en: '',
    name_so: '',
    description_en: '',
    description_so: '',
    grade_level: 'grade1' as const,
    subject_area: '',
    credits: 1
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('grade_level', { ascending: true });

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch courses',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddCourse = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .insert([newCourse])
        .select();

      if (error) throw error;

      if (data) {
        setCourses([...courses, ...data]);
        setIsAddDialogOpen(false);
        setNewCourse({
          code: '',
          name_en: '',
          name_so: '',
          description_en: '',
          description_so: '',
          grade_level: 'grade1' as const,
          subject_area: '',
          credits: 1
        });
        toast({
          title: 'Success',
          description: 'Course added successfully',
        });
      }
    } catch (error) {
      console.error('Error adding course:', error);
      toast({
        title: 'Error',
        description: 'Failed to add course',
        variant: 'destructive',
      });
    }
  };

  const filteredCourses = courses.filter(course =>
    course.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

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
                <Input 
                  id="courseCode" 
                  value={newCourse.code}
                  onChange={(e) => setNewCourse({...newCourse, code: e.target.value})}
                  placeholder="e.g., MATH101" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gradeLevel">Grade Level</Label>
                <Select value={newCourse.grade_level} onValueChange={(value) => setNewCourse({...newCourse, grade_level: value as any})}>
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
                <Input 
                  id="nameEn" 
                  value={newCourse.name_en}
                  onChange={(e) => setNewCourse({...newCourse, name_en: e.target.value})}
                  placeholder="Course name in English" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nameSo">Course Name (Somali)</Label>
                <Input 
                  id="nameSo" 
                  value={newCourse.name_so}
                  onChange={(e) => setNewCourse({...newCourse, name_so: e.target.value})}
                  placeholder="Course name in Somali" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subjectArea">Subject Area</Label>
                <Input 
                  id="subjectArea" 
                  value={newCourse.subject_area}
                  onChange={(e) => setNewCourse({...newCourse, subject_area: e.target.value})}
                  placeholder="e.g., Mathematics, Science" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="credits">Credits</Label>
                <Input 
                  id="credits" 
                  type="number" 
                  value={newCourse.credits}
                  onChange={(e) => setNewCourse({...newCourse, credits: parseInt(e.target.value)})}
                  placeholder="Number of credits" 
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="descriptionEn">Description (English)</Label>
                <Textarea 
                  id="descriptionEn" 
                  value={newCourse.description_en}
                  onChange={(e) => setNewCourse({...newCourse, description_en: e.target.value})}
                  placeholder="Course description in English" 
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="descriptionSo">Description (Somali)</Label>
                <Textarea 
                  id="descriptionSo" 
                  value={newCourse.description_so}
                  onChange={(e) => setNewCourse({...newCourse, description_so: e.target.value})}
                  placeholder="Course description in Somali" 
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddCourse}>
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
                  <CardTitle className="text-lg">{course.name_en}</CardTitle>
                  <p className="text-sm text-muted-foreground">{course.name_so}</p>
                  <p className="text-sm font-medium text-primary mt-1">{course.code}</p>
                </div>
                <Badge variant={course.is_active ? 'default' : 'secondary'}>
                  {course.is_active ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Grade Level:</span>
                  <span className="font-medium capitalize">{course.grade_level}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subject Area:</span>
                  <span className="font-medium">{course.subject_area}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Credits:</span>
                  <span className="font-medium">{course.credits}</span>
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
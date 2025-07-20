import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const StudentAdmissions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const applications = [
    {
      id: 1,
      studentName: 'Ahmed Hassan Mohamed',
      parentName: 'Hassan Mohamed Ali',
      gradeLevel: 'Grade 10',
      applicationDate: '2024-01-15',
      status: 'pending',
      phone: '+252 61 234 5678',
      email: 'hassan.mohamed@email.com',
      previousSchool: 'Mogadishu Secondary School'
    },
    {
      id: 2,
      studentName: 'Fatima Omar Said',
      parentName: 'Omar Said Ibrahim',
      gradeLevel: 'Grade 9',
      applicationDate: '2024-01-14',
      status: 'approved',
      phone: '+252 61 345 6789',
      email: 'omar.said@email.com',
      previousSchool: 'Banadir Primary School'
    },
    {
      id: 3,
      studentName: 'Mohamed Ali Hassan',
      parentName: 'Ali Hassan Omar',
      gradeLevel: 'Grade 11',
      applicationDate: '2024-01-13',
      status: 'rejected',
      phone: '+252 61 456 7890',
      email: 'ali.hassan@email.com',
      previousSchool: 'Hodan High School'
    },
    {
      id: 4,
      studentName: 'Amina Yusuf Ahmed',
      parentName: 'Yusuf Ahmed Mohamed',
      gradeLevel: 'Grade 8',
      applicationDate: '2024-01-12',
      status: 'pending',
      phone: '+252 61 567 8901',
      email: 'yusuf.ahmed@email.com',
      previousSchool: 'Wadajir Elementary School'
    }
  ];

  const enrolledStudents = [
    {
      id: 1,
      studentId: 'STU001',
      name: 'Khadija Mohamed Ali',
      gradeLevel: 'Grade 10',
      section: 'A',
      enrollmentDate: '2024-01-10',
      status: 'active',
      parentContact: '+252 61 123 4567'
    },
    {
      id: 2,
      studentId: 'STU002',
      name: 'Abdullahi Omar Hassan',
      gradeLevel: 'Grade 9',
      section: 'B',
      enrollmentDate: '2024-01-08',
      status: 'active',
      parentContact: '+252 61 234 5678'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'rejected':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'active':
        return <Badge className="bg-blue-100 text-blue-800">Active</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredApplications = applications.filter(app =>
    app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.parentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Admissions & Enrollment</h1>
          <p className="text-muted-foreground">Manage student applications and enrollment process</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Application
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>New Student Application</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentName">Student Full Name</Label>
                <Input id="studentName" placeholder="Enter student's full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input id="dateOfBirth" type="date" />
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
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentName">Parent/Guardian Name</Label>
                <Input id="parentName" placeholder="Enter parent's full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentPhone">Parent Phone</Label>
                <Input id="parentPhone" placeholder="+252 61 234 5678" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentEmail">Parent Email</Label>
                <Input id="parentEmail" type="email" placeholder="parent@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="previousSchool">Previous School</Label>
                <Input id="previousSchool" placeholder="Name of previous school" />
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsAddDialogOpen(false)}>
                Submit Application
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="applications" className="space-y-6">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="enrolled">Enrolled Students</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {filteredApplications.map((application) => (
              <Card key={application.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-lg font-semibold">{application.studentName}</h3>
                        {getStatusIcon(application.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Parent: {application.parentName}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span>Grade: {application.gradeLevel}</span>
                        <span>Applied: {application.applicationDate}</span>
                        <span>Phone: {application.phone}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Previous School: {application.previousSchool}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(application.status)}
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      {application.status === 'pending' && (
                        <>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Approve
                          </Button>
                          <Button variant="destructive" size="sm">
                            <XCircle className="h-3 w-3 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="enrolled" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledStudents.map((student) => (
              <Card key={student.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{student.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">ID: {student.studentId}</p>
                    </div>
                    {getStatusBadge(student.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Grade:</span>
                      <span className="font-medium">{student.gradeLevel}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Section:</span>
                      <span className="font-medium">{student.section}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Enrolled:</span>
                      <span className="font-medium">{student.enrollmentDate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Parent Contact:</span>
                      <span className="font-medium">{student.parentContact}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <Eye className="h-3 w-3 mr-1" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      assessments: {
        Row: {
          created_at: string | null
          exam_id: string
          graded_at: string | null
          graded_by: string | null
          id: string
          is_absent: boolean | null
          letter_grade: string | null
          marks_obtained: number
          percentage: number | null
          student_id: string
          teacher_comments_en: string | null
          teacher_comments_so: string | null
          total_marks: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          exam_id: string
          graded_at?: string | null
          graded_by?: string | null
          id?: string
          is_absent?: boolean | null
          letter_grade?: string | null
          marks_obtained: number
          percentage?: number | null
          student_id: string
          teacher_comments_en?: string | null
          teacher_comments_so?: string | null
          total_marks: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          exam_id?: string
          graded_at?: string | null
          graded_by?: string | null
          id?: string
          is_absent?: boolean | null
          letter_grade?: string | null
          marks_obtained?: number
          percentage?: number | null
          student_id?: string
          teacher_comments_en?: string | null
          teacher_comments_so?: string | null
          total_marks?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessments_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "exams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessments_graded_by_fkey"
            columns: ["graded_by"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assessments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      attendance: {
        Row: {
          attendance_date: string
          check_in_time: string | null
          check_out_time: string | null
          created_at: string | null
          id: string
          marked_by: string | null
          notes_en: string | null
          notes_so: string | null
          section_id: string
          status: Database["public"]["Enums"]["attendance_status"]
          student_id: string
          updated_at: string | null
        }
        Insert: {
          attendance_date: string
          check_in_time?: string | null
          check_out_time?: string | null
          created_at?: string | null
          id?: string
          marked_by?: string | null
          notes_en?: string | null
          notes_so?: string | null
          section_id: string
          status?: Database["public"]["Enums"]["attendance_status"]
          student_id: string
          updated_at?: string | null
        }
        Update: {
          attendance_date?: string
          check_in_time?: string | null
          check_out_time?: string | null
          created_at?: string | null
          id?: string
          marked_by?: string | null
          notes_en?: string | null
          notes_so?: string | null
          section_id?: string
          status?: Database["public"]["Enums"]["attendance_status"]
          student_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attendance_marked_by_fkey"
            columns: ["marked_by"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "class_sections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      class_sections: {
        Row: {
          academic_year: string
          assistant_teacher_id: string | null
          class_teacher_id: string | null
          classroom_location: string | null
          created_at: string | null
          current_enrollment: number | null
          grade_level: Database["public"]["Enums"]["grade_level"]
          id: string
          is_active: boolean | null
          max_capacity: number | null
          name_en: string
          name_so: string
          section_code: string
          updated_at: string | null
        }
        Insert: {
          academic_year: string
          assistant_teacher_id?: string | null
          class_teacher_id?: string | null
          classroom_location?: string | null
          created_at?: string | null
          current_enrollment?: number | null
          grade_level: Database["public"]["Enums"]["grade_level"]
          id?: string
          is_active?: boolean | null
          max_capacity?: number | null
          name_en: string
          name_so: string
          section_code: string
          updated_at?: string | null
        }
        Update: {
          academic_year?: string
          assistant_teacher_id?: string | null
          class_teacher_id?: string | null
          classroom_location?: string | null
          created_at?: string | null
          current_enrollment?: number | null
          grade_level?: Database["public"]["Enums"]["grade_level"]
          id?: string
          is_active?: boolean | null
          max_capacity?: number | null
          name_en?: string
          name_so?: string
          section_code?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "class_sections_assistant_teacher_id_fkey"
            columns: ["assistant_teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_sections_class_teacher_id_fkey"
            columns: ["class_teacher_id"]
            isOneToOne: false
            referencedRelation: "teachers"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          code: string
          created_at: string | null
          credits: number | null
          description_en: string | null
          description_so: string | null
          grade_level: Database["public"]["Enums"]["grade_level"]
          id: string
          is_active: boolean | null
          name_en: string
          name_so: string
          prerequisites: string[] | null
          subject_area: string
          updated_at: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          credits?: number | null
          description_en?: string | null
          description_so?: string | null
          grade_level: Database["public"]["Enums"]["grade_level"]
          id?: string
          is_active?: boolean | null
          name_en: string
          name_so: string
          prerequisites?: string[] | null
          subject_area: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          credits?: number | null
          description_en?: string | null
          description_so?: string | null
          grade_level?: Database["public"]["Enums"]["grade_level"]
          id?: string
          is_active?: boolean | null
          name_en?: string
          name_so?: string
          prerequisites?: string[] | null
          subject_area?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      curriculum_topics: {
        Row: {
          course_id: string
          created_at: string | null
          description_en: string | null
          description_so: string | null
          estimated_hours: number | null
          id: string
          is_published: boolean | null
          learning_objectives_en: string[] | null
          learning_objectives_so: string[] | null
          resource_urls: string[] | null
          sequence_order: number
          title_en: string
          title_so: string
          updated_at: string | null
        }
        Insert: {
          course_id: string
          created_at?: string | null
          description_en?: string | null
          description_so?: string | null
          estimated_hours?: number | null
          id?: string
          is_published?: boolean | null
          learning_objectives_en?: string[] | null
          learning_objectives_so?: string[] | null
          resource_urls?: string[] | null
          sequence_order: number
          title_en: string
          title_so: string
          updated_at?: string | null
        }
        Update: {
          course_id?: string
          created_at?: string | null
          description_en?: string | null
          description_so?: string | null
          estimated_hours?: number | null
          id?: string
          is_published?: boolean | null
          learning_objectives_en?: string[] | null
          learning_objectives_so?: string[] | null
          resource_urls?: string[] | null
          sequence_order?: number
          title_en?: string
          title_so?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "curriculum_topics_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      exams: {
        Row: {
          course_id: string
          created_at: string | null
          description_en: string | null
          description_so: string | null
          end_time: string
          exam_date: string
          exam_type: Database["public"]["Enums"]["exam_type"]
          id: string
          instructions_en: string | null
          instructions_so: string | null
          invigilator_ids: string[]
          is_published: boolean | null
          passing_marks: number
          section_id: string
          start_time: string
          title_en: string
          title_so: string
          total_marks: number
          updated_at: string | null
          venue_en: string | null
          venue_so: string | null
        }
        Insert: {
          course_id: string
          created_at?: string | null
          description_en?: string | null
          description_so?: string | null
          end_time: string
          exam_date: string
          exam_type: Database["public"]["Enums"]["exam_type"]
          id?: string
          instructions_en?: string | null
          instructions_so?: string | null
          invigilator_ids: string[]
          is_published?: boolean | null
          passing_marks?: number
          section_id: string
          start_time: string
          title_en: string
          title_so: string
          total_marks?: number
          updated_at?: string | null
          venue_en?: string | null
          venue_so?: string | null
        }
        Update: {
          course_id?: string
          created_at?: string | null
          description_en?: string | null
          description_so?: string | null
          end_time?: string
          exam_date?: string
          exam_type?: Database["public"]["Enums"]["exam_type"]
          id?: string
          instructions_en?: string | null
          instructions_so?: string | null
          invigilator_ids?: string[]
          is_published?: boolean | null
          passing_marks?: number
          section_id?: string
          start_time?: string
          title_en?: string
          title_so?: string
          total_marks?: number
          updated_at?: string | null
          venue_en?: string | null
          venue_so?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "exams_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exams_section_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "class_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      students: {
        Row: {
          address_en: string | null
          address_so: string | null
          created_at: string | null
          date_of_birth: string
          email: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          enrollment_date: string
          enrollment_status:
            | Database["public"]["Enums"]["enrollment_status"]
            | null
          first_name: string
          gender: string | null
          grade_level: Database["public"]["Enums"]["grade_level"]
          id: string
          last_name: string
          medical_notes_en: string | null
          medical_notes_so: string | null
          parent_id: string | null
          phone: string | null
          profile_image_url: string | null
          section_id: string | null
          student_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address_en?: string | null
          address_so?: string | null
          created_at?: string | null
          date_of_birth: string
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          enrollment_date: string
          enrollment_status?:
            | Database["public"]["Enums"]["enrollment_status"]
            | null
          first_name: string
          gender?: string | null
          grade_level: Database["public"]["Enums"]["grade_level"]
          id?: string
          last_name: string
          medical_notes_en?: string | null
          medical_notes_so?: string | null
          parent_id?: string | null
          phone?: string | null
          profile_image_url?: string | null
          section_id?: string | null
          student_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address_en?: string | null
          address_so?: string | null
          created_at?: string | null
          date_of_birth?: string
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          enrollment_date?: string
          enrollment_status?:
            | Database["public"]["Enums"]["enrollment_status"]
            | null
          first_name?: string
          gender?: string | null
          grade_level?: Database["public"]["Enums"]["grade_level"]
          id?: string
          last_name?: string
          medical_notes_en?: string | null
          medical_notes_so?: string | null
          parent_id?: string | null
          phone?: string | null
          profile_image_url?: string | null
          section_id?: string | null
          student_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_students_section"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "class_sections"
            referencedColumns: ["id"]
          },
        ]
      }
      teachers: {
        Row: {
          address_en: string | null
          address_so: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string
          first_name: string
          hire_date: string
          id: string
          is_active: boolean | null
          last_name: string
          phone: string | null
          profile_image_url: string | null
          qualifications_en: string | null
          qualifications_so: string | null
          role: Database["public"]["Enums"]["teacher_role"] | null
          subjects_taught: string[]
          teacher_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address_en?: string | null
          address_so?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          first_name: string
          hire_date: string
          id?: string
          is_active?: boolean | null
          last_name: string
          phone?: string | null
          profile_image_url?: string | null
          qualifications_en?: string | null
          qualifications_so?: string | null
          role?: Database["public"]["Enums"]["teacher_role"] | null
          subjects_taught: string[]
          teacher_id: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address_en?: string | null
          address_so?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          first_name?: string
          hire_date?: string
          id?: string
          is_active?: boolean | null
          last_name?: string
          phone?: string | null
          profile_image_url?: string | null
          qualifications_en?: string | null
          qualifications_so?: string | null
          role?: Database["public"]["Enums"]["teacher_role"] | null
          subjects_taught?: string[]
          teacher_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      attendance_status: "present" | "absent" | "tardy" | "excused"
      enrollment_status:
        | "active"
        | "inactive"
        | "graduated"
        | "transferred"
        | "suspended"
      exam_type:
        | "quiz"
        | "midterm"
        | "final"
        | "assignment"
        | "project"
        | "oral"
      grade_level:
        | "kg1"
        | "kg2"
        | "grade1"
        | "grade2"
        | "grade3"
        | "grade4"
        | "grade5"
        | "grade6"
        | "grade7"
        | "grade8"
        | "grade9"
        | "grade10"
        | "grade11"
        | "grade12"
      teacher_role: "teacher" | "admin" | "head_teacher" | "coordinator"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      attendance_status: ["present", "absent", "tardy", "excused"],
      enrollment_status: [
        "active",
        "inactive",
        "graduated",
        "transferred",
        "suspended",
      ],
      exam_type: ["quiz", "midterm", "final", "assignment", "project", "oral"],
      grade_level: [
        "kg1",
        "kg2",
        "grade1",
        "grade2",
        "grade3",
        "grade4",
        "grade5",
        "grade6",
        "grade7",
        "grade8",
        "grade9",
        "grade10",
        "grade11",
        "grade12",
      ],
      teacher_role: ["teacher", "admin", "head_teacher", "coordinator"],
    },
  },
} as const

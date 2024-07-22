import { url } from "inspector";

export const promptData = [
  {
    name: "Administrative",
    url: "/prompt_library/administrative",
    subPrompt: [
      {
        name: "Classroom Management Strategies",
        url: "/prompt_library/administrative/classroom_management",
      },
      {
        name: "Classroom Observation",
        url: "/prompt_library/administrative/classroom_observation",
      },
      {
        name: "Developing Workflow",
        url: "/prompt_library/administrative/developing_workflow",
      },

      {
        name: "Faculty Meeting",
        url: "/prompt_library/administrative/faculty_meeting",
      },

      {
        name: "Interview Qiestions",
        url: "/prompt_library/administrative/interview_questions",
      },
      {
        name: "Professional Idea Generator",
        url: "/prompt_library/administrative/professional_idea_generator",
      },
      {
        name: " Professional Idea Workshop Generator",
        url: "/prompt_library/administrative/professional_idea_workshop",
      },
      {
        name: "Reference Letters",
        url: "/prompt_library/administrative/reference_letter",
      },
      {
        name: "Smart Goal Generator",
        url: "/prompt_library/administrative/smart_goal_generation",
      },
      {
        name: "Summarize Meeting Notes",
        url: "/prompt_library/administrative/summarize_meeting_notes",
      },
    ],
  },
  {
    name: "Assesment",
    url: "/prompt_library/assesment",
    subPrompt: [
      {
        name: "AI-Assisted Assessments",
        url: "/prompt_library/assesment/ai_assisted_assesment",
      },
      {
        name: "Authentic Assessments",
        url: "/prompt_library/assesment/authentic_assesment",
      },
      {
        name: "Bloom's  Taxonomy",
        url: "/prompt_library/assesment/bloom_taxonomy",
      },
      {
        name: "Exit Tickets",
        url: "/prompt_library/assesment/exit_ticket",
      },
      {
        name: "Formative Assesments",
        url: "/prompt_library/assesment/formative_assesment",
      },
      {
        name: "Quizzes",
        url: "/prompt_library/assesment/quizzes",
      },
      {
        name: "Rubrics",
        url: "/prompt_library/assesment/rubrics",
      },
      {
        name: "Students Examplars",
        url: "/prompt_library/assesment/students_examplars",
      },
    ],
  },
  {
    name: "Communication",
    url: "/prompt_library/communication",
    subPrompt: [
      {
        name: "Class Representative Email for Parents",
        url: "/prompt_library/communication/class_representative_email",
      },

      {
        name: "Email Responses",
        url: "/prompt_library/communication/email_response",
      },
      {
        name: "Newsletters",
        url: "/prompt_library/communication/newsletters",
      },
      {
        name: "Parent-Teacher Conference email",
        url: "/prompt_library/communication/parent_teacher_conference",
      },
      {
        name: "Parents’ Night Curriculum Presentation",
        url: "/prompt_library/communication/parents_night_curriculum",
      },
      {
        name: "Reference Letters",
        url: "/prompt_library/communication/reference_letter",
      },
      {
        name: "School Upates",
        url: "/prompt_library/communication/school_updates",
      },
      {
        name: "Slides",
        url: "/prompt_library/communication/slides",
      },
    ],
  },
  {
    name: "For Student",
    url: "/prompt_library/for_student",
    subPrompt: [
      {
        name: "Break Down Goals Into Objectives",
        url: "/prompt_library/for_student/break_down_goals",
      },
      {
        name: "College Essay Ideas",
        url: "/prompt_library/for_student/college_essay_idea",
      },
      {
        name: "ELL Instructions Trasnlation",
        url: "/prompt_library/for_student/ell_instructions",
      },
      {
        name: "Explain it to Me Like...",
        url: "/prompt_library/for_student/explain",
      },
      {
        name: "FlashCards",
        url: "/prompt_library/for_student/flashcards",
      },
      {
        name: "Langauage Learning Practice Partner",
        url: "/prompt_library/for_student/language_learning",
      },
      {
        name: "Resaerch Project Ideas",
        url: "/prompt_library/for_student/research",
      },
      {
        name: "SMART Gloal Generation",
        url: "/prompt_library/for_student/smart_goal",
      },
      {
        name: "Studying Help",
        url: "/prompt_library/for_student/studying_help",
      },
    ],
  },
  {
    name: "Lesson Planning",
    url: "/prompt_library/lessonplanning",
    subPrompt: [
      {
        name: "Alternative Teaching Methods",
        url: "/prompt_library/lessonplanning/alternative_teaching",
      },
      {
        name: "Analyze a Language Sample",
        url: "/prompt_library/lessonplanning/analyze_language_sample",
      },
      {
        name: "Calculate Mean Length of Utterance",
        url: "/prompt_library/lessonplanning/calculate_mean_length",
      },
      {
        name: "Create an AAC World List",
        url: "/prompt_library/lessonplanning/create_aac_world_list",
      },
      {
        name: "Create Articular Passages",
        url: "/prompt_library/lessonplanning/create_articular_passages",
      },
      {
        name: "Identify the Source of Script",
        url: "/prompt_library/lessonplanning/identify_source",
      },
      {
        name: "Language Evaluation Repport",
        url: "/prompt_library/lessonplanning/language_evaluation",
      },
      {
        name: "Suggest Gestalts",
        url: "/prompt_library/lessonplanning/suggest_gestalts",
      },
      {
        name: "Target Word List",
        url: "/prompt_library/lessonplanning/target_word_list",
      },
      {
        name: "Transform an Exisiting Lesson",
        url: "/prompt_library/lessonplanning/transform_existing_lesson",
      },
    ],
  },
  {
    name: "Professional Development",
    url: "/prompt_library/professional_development",
    subPrompt: [
      {
        name: "PD Idea Generator ",
        url: "/prompt_library/professional_development/pd_idea_generator",
      },
      {
        name: "PD Workshop  Planner ",
        url: "/prompt_library/professional_development/pd_workshop_planner",
      },
      {
        name: "Team Building Activities ",
        url: "/prompt_library/professional_development/team_building_activities",
      },
    ],
  },
  {
    name: "Social: Emotional Learning",
    url: "/prompt_library/social_emotional_learning",
    subPrompt: [
      {
        name: "Confict Resolution Role_Play",
        url: "/prompt_library/social_emotional_learning/conflict_resolution",
      },
      {
        name: "Explain SEL Concept",
        url: "/prompt_library/social_emotional_learning/explain_concept",
      },
      {
        name: "Explicit SEL Instruction",
        url: "/prompt_library/social_emotional_learning/explicit",
      },
      {
        name: "Modeling SEL Competencies",
        url: "/prompt_library/social_emotional_learning/modeling",
      },
      {
        name: "SEL Icebreakers",
        url: "/prompt_library/social_emotional_learning/sel_icebreakers",
      },
      {
        name: "SEL Icebreakers",
        url: "/prompt_library/social_emotional_learning/sel_icebreakers",
      },
      {
        name: "SEL:Academic Integration",
        url: "/prompt_library/social_emotional_learning/academic_integration",
      },
      {
        name: "Self-Care Plan for Students",
        url: "/prompt_library/social_emotional_learning/self_care_plan",
      },
    ],
  },
  {
    name: "Special Education",
    url: "/prompt_library/special_education",
    subPrompt: [
      {
        name: "ALternative Teaching Methods",
        url: "/prompt_library/lessonplanning/alternative_teaching",
      },
      {
        name: "Analyze a Language Sample",
        url: "/prompt_library/lessonplanning/analyze_language_sample",
      },
      {
        name: "Calculate Mean Length of Utterance",
        url: "/prompt_library/lessonplanning/calculate_mean_length",
      },
      {
        name: "Create an AAC Word List",
        url: "/prompt_library/lessonplanning/create_aac_world_list",
      },
      {
        name: "Create Articular Passages",
        url: "/prompt_library/lessonplanning/create_articular_passages",
      },
      {
        name: "Identify the Source of Script",
        url: "/prompt_library/lessonplanning/identify_source",
      },
      {
        name: "Language Evaluation Repport",
        url: "/prompt_library/lessonplanning/language_evaluation",
      },
      {
        name: "Suggest Gestalts",
        url: "/prompt_library/lessonplanning/suggest_gestalts",
      },
      {
        name: "Trasform an Exisiting Lesson",
        url: "/prompt_library/lessonplanning/transform_existing_lesson",
      },
      {
        name: "Vocabulary and Target Word Lists",
        url: "/prompt_library/lessonplanning/target_word_list",
      },
    ],
  },
];
export const bgColors = [
  "bg-[#4285F4]", // Dodger blue
  "bg-[#90EE90]", // Light green
  "bg-[#FF00FF]", // Magenta
  "bg-[#C0C0C0]", // Silver
];

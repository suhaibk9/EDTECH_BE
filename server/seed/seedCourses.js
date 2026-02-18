import mongoose from "mongoose";
import Course from "../models/course.model.js";
import { config } from "dotenv";
import path from "path";

// Load env vars
config({ path: path.resolve(process.cwd(), ".env") });

const seedCourses = [
  {
    title: "Full Stack Web Development Bootcamp",
    description:
      "Learn full-stack web development from scratch with hands-on projects. Master HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    category: "Web Development",
    thumbnail: {
      public_id: "dummy_id_1",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363412/samples/landscapes/beach-boat.jpg",
    },
    lectures: [
      {
        title: "Introduction to Web Development",
        description: "Overview of how the web works.",
        lecture: {
          public_id: "vid_1",
          secure_url:
            "https://res.cloudinary.com/demo/video/upload/v1675363415/samples/sea-turtle.mp4",
        },
      },
      {
        title: "HTML Basics",
        description: "Understanding HTML structure and tags.",
        lecture: {
          public_id: "vid_2",
          secure_url:
            "https://res.cloudinary.com/demo/video/upload/v1675363415/samples/sea-turtle.mp4",
        },
      },
    ],
    numberOfLectures: 2,
    createdBy: "John Doe",
  },
  {
    title: "Python for Data Science and Machine Learning",
    description:
      "Master Python for data science and machine learning. Learn NumPy, Pandas, Matplotlib, Scikit-Learn, and more.",
    category: "Data Science",
    thumbnail: {
      public_id: "dummy_id_2",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363411/samples/landscapes/nature-mountains.jpg",
    },
    lectures: [
      {
        title: "Python Syntax",
        description: "Variables, data types, and control structures.",
        lecture: {
          public_id: "vid_3",
          secure_url:
            "https://res.cloudinary.com/demo/video/upload/v1675363415/samples/sea-turtle.mp4",
        },
      },
    ],
    numberOfLectures: 1,
    createdBy: "Jane Smith",
  },
  {
    title: "Digital Marketing Masterclass",
    description:
      "Complete digital marketing course. Learn SEO, social media marketing, email marketing, and analytics.",
    category: "Marketing",
    thumbnail: {
      public_id: "dummy_id_3",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363414/samples/people/bicycle.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Mike Johnson",
  },
  {
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of UI/UX design. Create beautiful and user-friendly interfaces with Figma and Adobe XD.",
    category: "Design",
    thumbnail: {
      public_id: "dummy_id_4",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363411/samples/animals/kitten-playing.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Sarah Williams",
  },
  {
    title: "Mobile App Development with Flutter",
    description:
      "Build native mobile apps for iOS and Android using Flutter. Learn Dart programming language and Flutter widgets.",
    category: "Mobile Development",
    thumbnail: {
      public_id: "dummy_id_5",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363410/samples/food/pot-mussels.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "David Brown",
  },
  {
    title: "Advanced React Patterns",
    description:
      "Deep dive into advanced React patterns, performance optimization, and state management techniques.",
    category: "Web Development",
    thumbnail: {
      public_id: "dummy_id_6",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363413/samples/building-modern.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Alice Green",
  },
  {
    title: "Machine Learning with TensorFlow",
    description:
      "Build and train neural networks using TensorFlow and Keras. Learn about deep learning and computer vision.",
    category: "Data Science",
    thumbnail: {
      public_id: "dummy_id_7",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363412/samples/landscapes/girl-urban-view.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Robert Wilson",
  },
  {
    title: "Graphic Design Masterclass",
    description:
      "Learn Adobe Photoshop, Illustrator, and InDesign. Create stunning graphics and designs for print and digital media.",
    category: "Design",
    thumbnail: {
      public_id: "dummy_id_8",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363412/samples/architecture-signs.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Emily Davis",
  },
  {
    title: "iOS App Development with Swift",
    description:
      "Build iOS apps using Swift and Xcode. Learn about UIKit, SwiftUI, and iOS app architecture.",
    category: "Mobile Development",
    thumbnail: {
      public_id: "dummy_id_9",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363412/samples/animals/reindeer.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Michael Clark",
  },
  {
    title: "Node.js API Development",
    description:
      "Build scalable and secure RESTful APIs using Node.js, Express, and MongoDB.",
    category: "Web Development",
    thumbnail: {
      public_id: "dummy_id_10",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363412/samples/bike.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Jessica Taylor",
  },
  {
    title: "Data Visualization with Tableau",
    description:
      "Learn to create interactive dashboards and visualizations using Tableau.",
    category: "Data Science",
    thumbnail: {
      public_id: "dummy_id_11",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363412/samples/sheep.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "William Martinez",
  },
  {
    title: "Social Media Marketing Strategy",
    description:
      "Develop effective social media marketing strategies for Facebook, Instagram, Twitter, and LinkedIn.",
    category: "Marketing",
    thumbnail: {
      public_id: "dummy_id_12",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363412/samples/food/dessert.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Sophia Anderson",
  },
  {
    title: "Figma for UI Design",
    description:
      "Master Figma for UI design. Learn about components, auto layout, and prototyping.",
    category: "Design",
    thumbnail: {
      public_id: "dummy_id_13",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363410/samples/people/smiling-man.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "James White",
  },
  {
    title: "Android App Development with Kotlin",
    description:
      "Build Android apps using Kotlin and Android Studio. Learn about activities, fragments, and data persistence.",
    category: "Mobile Development",
    thumbnail: {
      public_id: "dummy_id_14",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363410/samples/people/kitchen-bar.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Olivia Thomas",
  },
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Learn the basics of cybersecurity, including network security, cryptography, and ethical hacking.",
    category: "IT & Security",
    thumbnail: {
      public_id: "dummy_id_15",
      secure_url:
        "https://res.cloudinary.com/demo/image/upload/v1675363410/samples/people/jazz.jpg",
    },
    lectures: [],
    numberOfLectures: 0,
    createdBy: "Ethan Harris",
  },
];

const seedDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/lms";
    console.log("Connecting to database...", MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log("Connected to database");

    // Optional: Clear existing courses
    // await Course.deleteMany({});
    // console.log('Existing courses removed');

    for (const courseData of seedCourses) {
      const existingCourse = await Course.findOne({ title: courseData.title });
      if (!existingCourse) {
        await Course.create(courseData);
        console.log(`Created course: ${courseData.title}`);
      } else {
        console.log(`Course already exists: ${courseData.title}`);
      }
    }

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();

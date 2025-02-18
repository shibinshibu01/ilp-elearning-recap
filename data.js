const dayData = {
    1: {
        title: "ILP Day 1",
        courses: [
            { 
                title: "How Developers Think?", 
                description: "Understanding the mindset of successful software developers.",
                summary: "Developers approach problems with a logical and structured mindset, breaking tasks into smaller components to find efficient solutions."
            },
            { 
                title: "The Mindset of a Software Developer", 
                description: "Exploring problem-solving approaches and logical thinking.",
                summary: "A growth mindset and adaptability are crucial traits for developers to continuously improve their skills."
            },
            { 
                title: "Building Strong Workplace Relationships", 
                description: "How to gain respect and establish professional connections.",
                summary: "Effective communication and teamwork help in creating strong, positive relationships in the workplace."
            },
            { 
                title: "Creating a Win-Win Relationship with Your Manager", 
                description: "Effective collaboration with management for career growth.",
                summary: "Understanding your manager’s expectations and aligning them with your career goals ensures mutual success."
            },
            { 
                title: "Software Development Life Cycle (SDLC) Overview", 
                description: "A detailed breakdown of the SDLC process with real-world examples.",
                summary: "SDLC consists of multiple phases, including planning, designing, development, testing, deployment, and maintenance."
            },
            { 
                title: "SDLC Models and Best Practices", 
                description: "A comparison of Waterfall, Agile, and V-Model in software development.",
                summary: "Each SDLC model has advantages and disadvantages; Agile provides flexibility, whereas Waterfall follows a structured approach."
            }
        ]
    },
    2: {
        title: "ILP Day 2",
        courses: [
            { 
                title: "Defining Software Requirements", 
                description: "Understanding how to gather and document project requirements.",
                summary: "Clear software requirements help in reducing development errors and meeting client expectations effectively."
            },
            { 
                title: "High-Level Design (HLD) in SDLC", 
                description: "Examining the role of HLD in software architecture.",
                summary: "HLD outlines the system architecture and major components before diving into low-level implementation."
            },
            { 
                title: "Business Etiquette for Professionals", 
                description: "Enhancing workplace interactions and maintaining professionalism.",
                summary: "Proper etiquette, including email communication, punctuality, and professionalism, fosters a healthy work environment."
            },
            { 
                title: "Managing Business Calls Effectively", 
                description: "Best practices for handling professional phone conversations.",
                summary: "Clear and concise communication over calls ensures professionalism and efficiency in workplace discussions."
            },
            { 
                title: "Mastering Email Communication in Outlook 365", 
                description: "Sending and receiving emails efficiently in Microsoft Outlook.",
                summary: "Using email templates, folders, and rules in Outlook improves productivity and organization."
            },
            { 
                title: "Getting Started with Microsoft Teams", 
                description: "An introduction to Microsoft Teams for workplace collaboration.",
                summary: "Teams enhances workplace communication through instant messaging, video calls, and file sharing."
            },
            { 
                title: "Overview of Software Testing", 
                description: "Understanding the significance of software testing in development.",
                summary: "Testing ensures software reliability, performance, and security before deployment."
            }
        ]
    },
    3: {
        title: "ILP Day 3",
        courses: [
            { 
                title: "Unit Testing Fundamentals", 
                description: "How to write and execute unit tests for software components.",
                summary: "Unit tests validate individual components to ensure they work correctly in isolation."
            },
            { 
                title: "Integration Testing Explained", 
                description: "Assessing how different software components interact.",
                summary: "Integration testing verifies that multiple modules work together as expected."
            },
            { 
                title: "Essential Software Testing Resources", 
                description: "Key readings and references for improving testing skills.",
                summary: "A collection of books, articles, and courses to master software testing."
            },
            { 
                title: "Writing Professional Emails and Messages", 
                description: "Enhancing clarity and effectiveness in workplace communication.",
                summary: "Crafting clear and concise emails helps in professional and productive communication."
            },
            { 
                title: "Introduction to Agile Methodologies", 
                description: "Exploring Agile frameworks such as Scrum, Kanban, and Lean.",
                summary: "Agile promotes iterative development, collaboration, and quick adaptability in projects."
            }
        ]
    },
    4: {
        title: "ILP Day 4",
        courses: [
            { 
                title: "Agile 101: An Introduction", 
                description: "Understanding the basics of Agile methodology and its applications.",
                summary: "Agile follows a flexible approach to development, adapting to changing requirements." 
            },
            { 
                title: "The Agile Manifesto and Its Principles", 
                description: "Examining the Agile Manifesto and its 12 guiding principles.",
                summary: "The Agile Manifesto emphasizes customer collaboration, working software, and responsiveness to change."
            },
            { 
                title: "Applying Agile in Real-World Projects", 
                description: "How Agile methodologies improve software development workflows.",
                summary: "Real-world Agile practices involve daily stand-ups, sprint planning, and continuous feedback." 
            },
            { 
                title: "Effective Problem-Solving Techniques", 
                description: "Approaches to identifying and resolving complex problems.",
                summary: "Using structured methods like root cause analysis and decision matrices enhances problem-solving efficiency." 
            },
            { 
                title: "Using OneDrive in Microsoft 365", 
                description: "Managing and sharing files efficiently using OneDrive.",
                summary: "OneDrive enables cloud storage, version control, and seamless file sharing among teams." 
            },
            { 
                title: "Introduction to Agile - Video Course", 
                description: "A beginner-friendly video walkthrough of Agile concepts.",
                summary: "Video courses provide visual explanations of Agile frameworks and real-world applications." 
            }
        ]
    },
    5: {
        title: "ILP Day 5",
        courses: [
            { 
                title: "Understanding Critical Thinking", 
                description: "Developing skills to analyze and evaluate information effectively.",
                summary: "Critical thinking enables better decision-making by questioning assumptions and evaluating evidence logically."
            },
            { 
                title: "The Growth Mindset in AI Era", 
                description: "How a growth mindset helps in adapting to technological advancements.",
                summary: "A growth mindset fosters continuous learning, helping individuals stay relevant in the ever-evolving AI landscape."
            }
        ]
    },
    6: {
        title: "ILP Day 6",
        courses: [
            { 
                title: "Unleashing Your Self-Confidence", 
                description: "Strategies to boost self-confidence in professional settings.",
                summary: "Self-confidence is key to career growth, helping professionals take initiative and communicate effectively."
            },
            { 
                title: "Introduction to Scrum Methodology", 
                description: "Understanding the Agile Scrum framework and its applications.",
                summary: "Scrum helps teams work collaboratively by breaking projects into iterative sprints for efficient development."
            },
            { 
                title: "Getting Agile with Scrum", 
                description: "Exploring Agile project management through Scrum techniques.",
                summary: "Scrum enhances productivity by focusing on continuous improvement, adaptability, and transparency."
            }
        ]
    },
    7: {
        title: "ILP Day 7",
        courses: [
            { 
                title: "Understanding Scrum Meetings: Sprint Planning", 
                description: "A deep dive into sprint planning and task allocation.",
                summary: "Sprint planning helps define clear goals and priorities, ensuring teams stay aligned with project objectives."
            },
            { 
                title: "Scrum Retrospectives: Improving Team Performance", 
                description: "Analyzing past sprints to identify areas of improvement.",
                summary: "Regular retrospectives foster team growth by highlighting strengths and addressing challenges."
            },
            { 
                title: "Sprint Review: Demonstrating Progress", 
                description: "Showcasing sprint results and gathering feedback.",
                summary: "Sprint reviews help ensure that project outcomes align with stakeholder expectations."
            },
            { 
                title: "Daily Scrum Meetings: Enhancing Team Collaboration", 
                description: "A breakdown of daily stand-up meetings and their importance.",
                summary: "Daily stand-ups promote transparency and keep team members aligned on project progress."
            },
            { 
                title: "Developing a Mindset of Growth and Learning", 
                description: "Cultivating lifelong learning habits for continuous development.",
                summary: "A learning mindset helps individuals embrace challenges and adapt to technological advancements."
            }
        ]
    },
    8: {
        title: "ILP Day 8",
        courses: [
            { 
                title: "Object-Oriented Analysis & Design", 
                description: "Exploring key concepts in object-oriented software design.",
                summary: "Understanding object-oriented principles helps in designing modular and maintainable software."
            },
            { 
                title: "Fundamentals of Object-Oriented Programming", 
                description: "A practical introduction to OOP principles.",
                summary: "Object-oriented programming enables code reusability, scalability, and better organization."
            },
            { 
                title: "Choosing the Right Interpersonal Communication Method", 
                description: "Adapting communication techniques based on the situation.",
                summary: "Effective communication ensures clarity, improves teamwork, and minimizes misunderstandings."
            }
        ]
    },
    9: {
        title: "ILP Day 9",
        courses: [
            { 
                title: "Programming Fundamentals: Object-Oriented Programming", 
                description: "A deeper look into OOP structures and principles.",
                summary: "OOP enables better software design by encapsulating functionality within objects."
            },
            { 
                title: "Introduction to UML (Unified Modeling Language)", 
                description: "How UML helps in software system visualization.",
                summary: "UML provides a standardized way to visualize software architecture and interactions."
            },
            { 
                title: "UML Diagram Types and Their Applications", 
                description: "Exploring different types of UML diagrams.",
                summary: "UML diagrams help in structuring software design through use case, sequence, and class diagrams."
            },
            { 
                title: "Enhancing Communication through Active Listening", 
                description: "How listening skills improve workplace interactions.",
                summary: "Active listening fosters empathy, understanding, and effective communication in professional settings."
            }
        ]
    },
    10: {
        title: "ILP Day 10",
        courses: [
            { 
                title: "CompTIA A+ Core 2: Communication & Policy Concepts", 
                description: "Understanding communication, licensing, and security policies in IT.",
                summary: "Following security policies and proper communication techniques is crucial in IT environments."
            },
            { 
                title: "Developing Personal Accountability", 
                description: "The importance of taking ownership of tasks and responsibilities.",
                summary: "Accountability in the workplace builds trust and ensures project success."
            }
        ]
    },
    11: {
        title: "ILP Day 11",
        courses: [
            { 
                title: "Being an Effective Team Member", 
                description: "Understanding teamwork dynamics and collaboration strategies.",
                summary: "Effective team members contribute proactively, communicate clearly, and align with team goals."
            },
            { 
                title: "Software Design & Development: Modeling with UML", 
                description: "How UML helps structure and visualize software development.",
                summary: "UML models facilitate software planning, making complex systems easier to design and maintain."
            },
            { 
                title: "Object-Oriented Programming & Design Basics", 
                description: "Fundamentals of object-oriented programming principles.",
                summary: "OOP principles, such as encapsulation and inheritance, improve software modularity and reusability."
            },
            { 
                title: "Developing Emotional Intelligence", 
                description: "Enhancing self-awareness and managing emotions in a professional setting.",
                summary: "Emotional intelligence helps professionals navigate workplace challenges and foster strong relationships."
            },
            { 
                title: "Influencing through Positive Leadership", 
                description: "How leadership styles impact team performance and collaboration.",
                summary: "Positive leadership motivates teams, builds trust, and drives project success."
            }
        ]
    },
    12: {
        title: "ILP Day 12",
        courses: [
            { 
                title: "What is a Database?", 
                description: "Understanding the fundamentals of databases and their applications.",
                summary: "Databases store, organize, and manage data efficiently for software applications."
            },
            { 
                title: "Database Fundamentals: Core Concepts", 
                description: "Key principles behind relational and non-relational databases.",
                summary: "Databases ensure data integrity, security, and scalability in modern applications."
            }
        ]
    },
    13: {
        title: "ILP Day 13",
        courses: [
            { 
                title: "Bridging Differences in Cross-Cultural Communication", 
                description: "Developing skills to communicate effectively across different cultures.",
                summary: "Cross-cultural communication fosters inclusivity, understanding, and global collaboration."
            },
            { 
                title: "The Power of Insight: How Self-Awareness Helps Us Succeed", 
                description: "Exploring the importance of self-awareness in professional growth.",
                summary: "Self-awareness enhances decision-making, leadership, and emotional intelligence."
            },
            { 
                title: "SQL 2016 Tables and Data Structures", 
                description: "How SQL organizes and structures data in relational databases.",
                summary: "Understanding table structures in SQL is key to efficient data storage and retrieval."
            },
            { 
                title: "Data Types & Normalization in SQL", 
                description: "Optimizing data storage through normalization techniques.",
                summary: "Normalization minimizes redundancy and ensures data consistency in databases."
            }
        ]
    },
    14: {
        title: "ILP Day 14",
        courses: [
            { 
                title: "Data Integrity & Constraints in SQL", 
                description: "Ensuring database accuracy and reliability through constraints.",
                summary: "Constraints like primary keys and foreign keys maintain data relationships and prevent inconsistencies."
            },
            { 
                title: "Stored Procedures in SQL", 
                description: "How stored procedures optimize database performance.",
                summary: "Stored procedures streamline SQL queries, improve security, and reduce code redundancy."
            },
            { 
                title: "Designing & Implementing Views in SQL", 
                description: "Creating views to simplify data retrieval and management.",
                summary: "Views provide a structured way to represent and manipulate database data without altering the underlying tables."
            },
            { 
                title: "Functions in SQL", 
                description: "Understanding built-in and user-defined SQL functions.",
                summary: "Functions enhance query capabilities by performing calculations and data transformations."
            }
        ]
    },
    15: {
        title: "ILP Day 15",
        courses: [
            { 
                title: "SQL vs. NoSQL: Key Differences", 
                description: "Comparing relational and non-relational databases.",
                summary: "SQL databases are structured, while NoSQL databases offer flexibility for unstructured data."
            },
            { 
                title: "SQL vs. NoSQL: When to Use Each", 
                description: "Understanding scenarios where SQL or NoSQL is more effective.",
                summary: "Relational databases excel in transactional applications, whereas NoSQL is ideal for large-scale, dynamic data."
            },
            { 
                title: "SQL Practice: Familiarizing Yourself with Commands", 
                description: "Hands-on practice with basic SQL queries.",
                summary: "Practicing SQL commands helps in mastering data retrieval, modification, and management."
            }
        ]
    },
    16: {
        title: "ILP Day 16",
        courses: [
            { 
                title: "Encouraging Team Communication and Collaboration", 
                description: "Effective strategies to foster teamwork and collaboration in professional settings.",
                summary: "Strong communication skills enhance team efficiency, promote knowledge sharing, and improve project outcomes."
            },
            { 
                title: "Building Rapport through Strong Collaboration", 
                description: "Developing trust and rapport within professional teams.",
                summary: "Trust and mutual respect within a team foster a productive and positive work environment."
            },
            { 
                title: "How the Internet Works - Basics", 
                description: "Understanding the fundamental concepts of how the internet functions.",
                summary: "The internet is a vast network of interconnected computers that communicate using standardized protocols."
            },
            { 
                title: "IP Addressing and IPv4 Subnetting", 
                description: "Exploring IP addressing and subnetting techniques in networking.",
                summary: "Subnetting improves network efficiency by dividing large networks into smaller, manageable subnetworks."
            },
            { 
                title: "Basics of IP Addresses in Computer Networking", 
                description: "Learning how IP addresses facilitate communication between devices.",
                summary: "IP addresses are essential for identifying devices on a network and enabling seamless communication."
            }
        ]
    },
    17: {
        title: "ILP Day 17",
        courses: [
            { 
                title: "Learn Linux Shell Commands", 
                description: "An introduction to basic Linux commands and their applications.",
                summary: "Mastering Linux commands enhances efficiency in system navigation, file management, and automation."
            },
            { 
                title: "HTML Basics for Web Development", 
                description: "Understanding the structure and elements of HTML.",
                summary: "HTML forms the backbone of web pages, defining their structure and content."
            },
            { 
                title: "CSS for Web Page Styling", 
                description: "An introduction to styling web pages using CSS.",
                summary: "CSS enhances the visual appeal of websites by controlling layout, colors, and typography."
            },
            { 
                title: "JavaScript for Dynamic Web Pages", 
                description: "Making web pages interactive using JavaScript.",
                summary: "JavaScript adds dynamic behavior to websites, enabling interactive user experiences."
            },
            { 
                title: "Creating a GitHub Account and Learning Git Commands", 
                description: "Version control basics using Git and GitHub.",
                summary: "Git helps track changes in code, facilitating collaboration and version management in development."
            }
        ]
    },
    18: {
        title: "ILP Day 18",
        courses: [
            { 
                title: "Synchronizing Goals to Optimize Team Performance", 
                description: "Aligning individual and team goals for enhanced productivity.",
                summary: "Goal synchronization ensures that all team members work towards a common objective efficiently."
            },
            { 
                title: "How the Internet Works - Advanced Concepts", 
                description: "Diving deeper into the technologies behind the internet.",
                summary: "Understanding internet protocols, data packets, and network communication enhances knowledge of digital connectivity."
            },
            { 
                title: "Advanced Networking: IP Addressing & Subnetting", 
                description: "Expanding on subnetting and IP address allocation strategies.",
                summary: "Subnetting divides networks into logical segments to improve security and reduce congestion."
            }
        ]
    },
    19: {
        title: "ILP Day 19",
        courses: [
            { 
                title: "Mastering One Key Skill for Career Success", 
                description: "Focusing on a critical skill that can enhance professional growth.",
                summary: "Mastering a core skill in your industry can provide a significant career advantage."
            }
        ]
    },
    20: {
        title: "ILP Day 20",
        courses: [
            { 
                title: "Mastering Advanced Git Commands", 
                description: "Taking version control to the next level with Git.",
                summary: "Advanced Git techniques improve collaboration and workflow in software development."
            },
            { 
                title: "Effective Collaboration on GitHub", 
                description: "Leveraging GitHub features for seamless project management.",
                summary: "GitHub provides powerful tools for issue tracking, pull requests, and project organization."
            },
            { 
                title: "Exploring Modern Web Technologies", 
                description: "An overview of the latest web development trends and tools.",
                summary: "Staying updated with modern web technologies ensures better performance and user experience in development."
            },
            { 
                title: "Full-Stack Development: The Road Ahead", 
                description: "Understanding the future of full-stack web development.",
                summary: "Mastering both frontend and backend technologies enables developers to build complete web applications."
            },
            { 
                title: "Final Review & Wrap-up of ILP", 
                description: "Summarizing the key takeaways from the Initial Learning Program.",
                summary: "Reflecting on learning outcomes helps in solidifying knowledge and planning future growth."
            }
        ]
    }
};
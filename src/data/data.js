export const data = [
  {
    id: "1",
    slug: "retail",
    title: "Retail",
    description:
      "Top-level project for retail activities, aiming to streamline and enhance various aspects of retail operations. This includes improving customer satisfaction, managing stock levels effectively, and driving sales growth.",
    createdAt: "2024-02-09",
    image: "https://picsum.photos/800/400?random=1",
    tickets: [
      {
        title: "Project Kickoff",
        assignee: "John Doe",
        reporter: "Jane Smith",
        createdAt: "04/01/2016",
        lastUpdateAt: "21/02/2020",
        status: "TO_DO",
        type: "task",
        priority: "Medium",
        content: {
          description:
            "Hold a kickoff meeting to discuss project goals and objectives.",
          todo: [
            "Create a line from title",
            "Finish the function test",
            "Create a path to moon",
          ],
        },
      },
      {
        title: "Stakeholder Meeting",
        assignee: "Alice Johnson",
        reporter: "Bob Brown",
        createdAt: "04/02/2016",
        lastUpdateAt: "21/02/2020",
        status: "IN_PROGRESS",
        type: "note",
        priority: "Low",
        content: {
          description:
            "Schedule a meeting with key stakeholders to gather requirements.",
        },
      },
      {
        title: "Project Review",
        assignee: "Eva Williams",
        reporter: "David Lee",
        createdAt: "15/02/2016",
        lastUpdateAt: "21/02/2020",
        status: "DONE",
        type: "attachment",
        priority: "High",
        content: {
          url: "https://example.com/project_review.pdf",
          description:
            "This is just a description, telling the user that is seeing this to do a ticket with the needs. The ticket usually has a type and after a type there is a content for that type.",
        },
      },
      {
        title: "Task 1",
        assignee: "John Doe",
        reporter: "Jane Smith",
        createdAt: "23/02/2016",
        lastUpdateAt: "21/02/2020",
        status: "TO_DO",
        type: "task",
        priority: "Medium",
        content: {
          description: "Complete the first task for Retail project.",
          todo: [
            "Create a line from title",
            "Finish the function test",
            "Create a path to moon",
          ],
        },
      },
      {
        title: "Task 2",
        assignee: "Alice Johnson",
        reporter: "Bob Brown",
        createdAt: "17/22/2016",
        lastUpdateAt: "21/02/2020",
        status: "TO_DO",
        type: "task",
        priority: "Low",
        content: {
          description: "Work on the second task for Retail project.",
          todo: [
            "Create a line from title",
            "Finish the function test",
            "Create a path to moon",
          ],
        },
      },
    ],
    children: [
      {
        id: "2",
        slug: "customer-satisfaction",
        title: "Customer satisfaction",
        value: "Customer satisfaction",
        description:
          "Focuses on improving customer satisfaction through various strategies and initiatives.",
        createdAt: "2024-02-09",
        image: "https://picsum.photos/800/400?random=2",
        tickets: [
          {
            title: "Survey Analysis",
            assignee: "John Doe",
            reporter: "Jane Smith",
            createdAt: "17/22/2017",
            lastUpdateAt: "21/02/2020",
            status: "TO_DO",
            type: "task",
            priority: "Medium",
            content: {
              description:
                "Analyze customer survey results and identify areas for improvement.",
              todo: [
                "Create a line from title",
                "Finish the function test",
                "Create a path to moon",
              ],
            },
          },
          {
            title: "Feedback Collection",
            assignee: "Alice Johnson",
            reporter: "Bob Brown",
            createdAt: "17/22/2018",
            lastUpdateAt: "21/02/2020",
            status: "IN_PROGRESS",
            type: "note",
            priority: "Low",
            content: {
              description:
                "Collect feedback from customers during store visits.",
            },
          },
        ],
      },
      {
        id: "3",
        slug: "stock",
        title: "Stock",
        value: "Stock",
        description:
          "Aims to efficiently manage stock levels, ensuring optimal inventory control and preventing shortages or excesses. This includes monitoring stock levels on a regional basis to optimize distribution.",
        createdAt: "2024-02-09",
        image: "https://picsum.photos/800/400?random=3",
        tickets: [
          {
            title: "Inventory Report",
            assignee: "Eva Williams",
            reporter: "David Lee",
            createdAt: "17/22/2018",
            lastUpdateAt: "21/02/2020",
            status: "DONE",
            type: "task",
            priority: "High",
            content: {
              description:
                "Generate and review monthly inventory report for each region.",
              todo: [
                "Create a line from title",
                "Finish the function test",
                "Create a path to moon",
              ],
            },
          },
        ],
        children: [
          {
            id: "4",
            slug: "stock-per-region",
            title: "Stock per region",
            value: "Stock per region",
            description:
              "Monitors stock levels on a regional basis, providing insights to optimize distribution and meet demand effectively.",
            createdAt: "2024-02-09",
            image: "https://picsum.photos/800/400?random=4",
            tickets: [],
          },
        ],
      },
      {
        id: "5",
        slug: "sales",
        title: "Sales",
        value: "Sales",
        description:
          "Drives sales growth through targeted efforts, promotions, and strategic initiatives.",
        createdAt: "2024-02-09",
        image: "https://picsum.photos/800/400?random=5",
        tickets: [],
      },
    ],
  },
  {
    id: "6",
    slug: "marketing",
    title: "Marketing",
    value: "Marketing",
    description:
      "Top-level project dedicated to marketing activities, encompassing a range of strategies and campaigns. This includes creating impactful marketing promotions, running comprehensive marketing campaigns to increase brand visibility, and developing and implementing campaign themes.",
    createdAt: "2024-02-09",
    image: "https://picsum.photos/800/400?random=6",
    tickets: [
      {
        title: "Marketing Strategy",
        assignee: "Sophia Brown",
        reporter: "Michael Taylor",
        createdAt: "17/22/2018",
        lastUpdateAt: "21/02/2020",
        status: "DONE",
        type: "task",
        priority: "High",
        content: {
          description:
            "Develop a comprehensive marketing strategy for the entire project.",
          todo: [
            "Create a line from title",
            "Finish the function test",
            "Create a path to moon",
          ],
        },
      },
      {
        title: "Content Calendar",
        assignee: "Daniel White",
        reporter: "Emily Harris",
        createdAt: "17/04/2018",
        lastUpdateAt: "21/02/2020",
        status: "TO_DO",
        type: "note",
        priority: "Low",
        content: {
          description:
            "Create a content calendar for upcoming marketing campaigns.",
        },
      },
      {
        title: "Media Plan",
        assignee: "Ava Anderson",
        reporter: "James Robinson",
        createdAt: "17/04/2018",
        lastUpdateAt: "21/02/2020",
        status: "IN_PROGRESS",
        type: "attachment",
        priority: "Medium",
        content: {
          url: "https://example.com/media_plan.pdf",
          description:
            "This is just a description, telling the user that is seeing this to do a ticket with the needs. The ticket usually has a type and after a type there is a content for that type.",
        },
      },
      {
        title: "Note 1",
        assignee: "Sophia Brown",
        reporter: "Michael Taylor",
        createdAt: "14/04/2018",
        lastUpdateAt: "21/02/2020",
        status: "IN_PROGRESS",
        type: "note",
        priority: "High",
        content: {
          description:
            "Take note of important information for Marketing project.",
        },
      },
      {
        title: "Note 2",
        assignee: "Daniel White",
        reporter: "Emily Harris",
        createdAt: "14/04/2018",
        lastUpdateAt: "21/02/2020",
        status: "DONE",
        type: "note",
        priority: "Low",
        content: {
          description: "Create another note for Marketing project.",
        },
      },
      {
        title: "Task 3",
        assignee: "Ava Anderson",
        reporter: "James Robinson",
        createdAt: "14/04/2010",
        lastUpdateAt: "21/02/2020",
        status: "TO_DO",
        type: "task",
        priority: "Medium",
        content: {
          description: "Initiate the third task for Marketing project.",
          todo: [
            "Create a line from title",
            "Finish the function test",
            "Create a path to moon",
          ],
        },
      },
      {
        title: "Attachment 1",
        assignee: "Liam Martinez",
        reporter: "Chloe Garcia",
        createdAt: "14/04/2010",
        lastUpdateAt: "21/02/2020",
        status: "DONE",
        type: "attachment",
        priority: "High",
        content: {
          url: "https://example.com/attachment1.pdf",
          description:
            "This is just a description, telling the user that is seeing this to do a ticket with the needs. The ticket usually has a type and after a type there is a content for that type.",
        },
      },
      {
        title: "Attachment 2",
        assignee: "Sophia Brown",
        reporter: "Michael Taylor",
        createdAt: "14/04/2020",
        lastUpdateAt: "21/02/2020",
        status: "TO_DO",
        type: "attachment",
        priority: "Low",
        content: {
          url: "https://example.com/attachment2.pdf",
          description:
            "This is just a description, telling the user that is seeing this to do a ticket with the needs. The ticket usually has a type and after a type there is a content for that type.",
        },
      },
      {
        title: "Attachment 3",
        assignee: "Daniel White",
        reporter: "Emily Harris",
        createdAt: "14/04/2020",
        lastUpdateAt: "21/02/2020",
        status: "IN_PROGRESS",
        type: "attachment",
        priority: "Medium",
        content: {
          url: "https://example.com/attachment3.pdf",
          description:
            "This is just a description, telling the user that is seeing this to do a ticket with the needs. The ticket usually has a type and after a type there is a content for that type.",
        },
      },
    ],
    children: [
      {
        id: "7",
        slug: "promotions",
        title: "Promotions",
        value: "Promotions",
        description:
          "Focuses on creating impactful marketing promotions to attract and engage customers.",
        createdAt: "2024-02-09",
        image: "https://picsum.photos/800/400?random=7",
        tickets: [
          {
            title: "Promotion Strategy",
            assignee: "Liam Martinez",
            reporter: "Chloe Garcia",
            createdAt: "14/04/2020",
            lastUpdateAt: "21/02/2020",
            status: "IN_PROGRESS",
            type: "note",
            priority: "Medium",
            content: {
              description:
                "Develop a comprehensive strategy for the upcoming promotional activities.",
            },
          },
        ],
        children: [
          {
            id: "8",
            slug: "campaigns",
            title: "Campaigns",
            value: "Campaigns",
            description:
              "Involves running comprehensive marketing campaigns to increase brand visibility and drive sales.",
            createdAt: "2024-02-09",
            image: "https://picsum.photos/800/400?random=8",
            tickets: [
              {
                title: "Theme Design",
                assignee: "Sophia Brown",
                reporter: "Michael Taylor",
                createdAt: "04/03/2020",
                lastUpdateAt: "21/02/2020",
                status: "TO_DO",
                type: "task",
                priority: "High",
                content: {
                  description:
                    "Design captivating visual themes for the upcoming marketing campaign.",
                  todo: [
                    "Create a line from title",
                    "Finish the function test",
                    "Create a path to moon",
                  ],
                },
              },
              {
                title: "Content Creation",
                assignee: "Daniel White",
                reporter: "Emily Harris",
                createdAt: "04/03/2020",
                lastUpdateAt: "21/02/2020",
                status: "IN_PROGRESS",
                type: "note",
                priority: "Low",
                content: {
                  description:
                    "Create engaging content for social media promotion.",
                },
              },
              {
                title: "Media Coverage",
                assignee: "Ava Anderson",
                reporter: "James Robinson",
                createdAt: "04/01/2013",
                lastUpdateAt: "21/02/2020",
                status: "TO_DO",
                type: "attachment",
                priority: "Medium",
                content: {
                  url: "https://example.com/media_coverage.pdf",
                  description:
                    "This is just a description, telling the user that is seeing this to do a ticket with the needs. The ticket usually has a type and after a type there is a content for that type.",
                },
              },
              {
                title: "Attachment 4",
                assignee: "Liam Martinez",
                reporter: "Chloe Garcia",
                createdAt: "04/01/2013",
                lastUpdateAt: "21/02/2020",
                status: "DONE",
                type: "attachment",
                priority: "High",
                content: {
                  url: "https://example.com/attachment4.pdf",
                  description:
                    "This is just a description, telling the user that is seeing this to do a ticket with the needs. The ticket usually has a type and after a type there is a content for that type.",
                },
              },
              {
                title: "Task 4",
                assignee: "Sophia Brown",
                reporter: "Michael Taylor",
                createdAt: "04/01/2013",
                lastUpdateAt: "21/02/2020",
                status: "IN_PROGRESS",
                type: "task",
                priority: "Medium",
                content: {
                  description: "Work on the fourth task for Campaigns project.",
                  todo: [
                    "Create a line from title",
                    "Finish the function test",
                    "Create a path to moon",
                  ],
                },
              },
            ],
            children: [
              {
                id: "9",
                slug: "themes",
                title: "Themes",
                value: "Themes",
                description:
                  "Develops and implements campaign themes to create a cohesive and compelling brand narrative.",
                createdAt: "2024-02-09",
                image: "https://picsum.photos/800/400?random=9",
                tickets: [
                  {
                    title: "Task 5",
                    assignee: "Liam Martinez",
                    reporter: "Chloe Garcia",
                    createdAt: "04/01/2013",
                    lastUpdateAt: "21/02/2020",
                    status: "DONE",
                    type: "task",
                    priority: "Low",
                    content: {
                      description:
                        "Complete the fifth task for Themes project.",
                      todo: [
                        "Create a line from title",
                        "Finish the function test",
                        "Create a path to moon",
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

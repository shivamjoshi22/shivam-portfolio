/** Person-specific content. This standalone project's UI lives in src/ui. */
export default {
  "name": "Shivam Joshi",
  "role": "Senior Software Engineer",
  "company": "Qualcomm",
  "location": "Hyderabad, India",
  "disciplines": [
    "C/C++",
    "Embedded Linux",
    "Android"
  ],
  "tagline": "Building the systems behind the screen, from Linux drivers to low-latency video on Snapdragon.",
  "signature": "From code to the screen.",
  "description": "Shivam Joshi — Senior Software Engineer at Qualcomm. Embedded Linux and Android, C/C++, ARM-based Snapdragon platforms, and low-latency multimedia systems.",
  "isDraft": false,
  "sections": [
    {
      "id": "about",
      "type": "about",
      "label": "About"
    },
    {
      "id": "experience",
      "type": "experience",
      "label": "Experience"
    },
    {
      "id": "projects",
      "type": "projects",
      "label": "Selected work"
    },
    {
      "id": "achievements",
      "type": "achievements",
      "label": "Achievements"
    },
    {
      "id": "education",
      "type": "education",
      "label": "Education"
    },
    {
      "id": "contact",
      "type": "contact",
      "label": "Let's connect"
    }
  ],
  "about": [
    "I'm a Senior Software Engineer at Qualcomm with over four years of experience developing Linux and Android system software for Snapdragon Mobile and XR platforms.",
    "I work on multimedia subsystem bring-up, Android HAL integration, ARM-based SoCs, and shared-memory synchronization. I debug issues that span hardware accelerators, Linux kernel components, HALs, and Android frameworks.",
    "I've helped ship software deployed on millions of consumer devices and mentor interns and junior engineers on multimedia architecture and system debugging."
  ],
  "metrics": [
    {
      "value": "~27%",
      "label": "lower decode latency with Early-Notify"
    },
    {
      "value": "50–80%",
      "label": "less system memory per playback session"
    }
  ],
  "metricNote": "Early-Notify reduces decode latency through fence-based signaling. Inline downscaling saves up to 400 MB per 8K playback session.",
  "skills": [
    "C++",
    "C",
    "Java",
    "Linux",
    "Android",
    "ARM-based SoCs",
    "Android HALs",
    "V4L2",
    "Codec2 HAL",
    "Multimedia frameworks",
    "Shared-memory IPC",
    "Cache coherency",
    "Producer-consumer pipelines",
    "Event-driven messaging",
    "Mobile platform bring-up",
    "System debugging",
    "Multimedia pipelines",
    "Git",
    "Gerrit",
    "Jira",
    "Systrace",
    "FlameGraph"
  ],
  "experience": [
    {
      "id": "qualcomm-senior",
      "role": "Senior Software Engineer",
      "company": "Qualcomm Inc.",
      "start": "Dec 2025",
      "end": "Present",
      "summary": "Multimedia systems · Snapdragon Mobile and XR · Hyderabad, India.",
      "highlights": [
        "Implemented cache coherency for shared memory between ARM CPUs and multimedia accelerators, keeping data consistent while minimizing synchronization overhead.",
        "Led multimedia subsystem bring-up and validation on next-generation Snapdragon Mobile and XR chipsets.",
        "Implemented inline downscaling that outputs 4K and 8K video at display resolution, reducing memory use and bandwidth.",
        "Reduced system memory use by 50–80% per playback session, saving up to 400 MB for 8K workloads.",
        "Resolved issues spanning Linux kernel components, Android HALs, multimedia frameworks, display pipelines, and hardware blocks reported by Samsung, Google, Meta, and Netflix.",
        "Mentored interns and junior engineers on Linux, Android multimedia architecture, and system debugging."
      ],
      "skills": [
        "Linux",
        "Android HALs",
        "Cache coherency",
        "Multimedia bring-up"
      ]
    },
    {
      "id": "qualcomm-engineer",
      "role": "Software Engineer",
      "company": "Qualcomm Inc.",
      "start": "May 2022",
      "end": "Nov 2025",
      "summary": "Low-latency video pipelines · Snapdragon Mobile and XR · Hyderabad, India.",
      "highlights": [
        "Developed Early-Notify, using fences to coordinate video and GPU subsystems and reduce decode latency by approximately 27%.",
        "Enabled partial-frame rendering during active decoding to reduce time-to-glass latency for XR and VR.",
        "Developed Early-Start decoding, which begins on first-slice arrival and reduces decode latency by approximately 35%.",
        "Built a decorated linear buffer pool so hardware decoders could consume video without CPU copies, improving streaming performance for cloud and PC-based VR.",
        "Contributed to architecture discussions, feasibility analysis, performance investigations, and platform bring-up for Snapdragon Mobile and XR."
      ],
      "skills": [
        "C++",
        "Zero-copy buffers",
        "Fences",
        "Snapdragon XR"
      ]
    }
  ],
  "projects": [
    {
      "id": "early-video",
      "category": "Professional work · Qualcomm",
      "title": "Getting frames to the screen sooner",
      "description": "Early-Notify uses fences to coordinate video decoding and GPU work. Partial-frame rendering during active decoding reduces time-to-glass latency for XR and VR.",
      "outcome": "Early-Notify cut decode latency by approximately 27%. Early-Start, which starts decoding on first-slice arrival, cut decode latency by approximately 35%.",
      "pipeline": {
        "steps": [
          "Video",
          "GPU",
          "Display"
        ],
        "caption": "Coordinate the subsystems. Reduce synchronization stalls."
      },
      "skills": [
        "C++",
        "Fences",
        "Synchronization",
        "XR / VR"
      ]
    },
    {
      "id": "video-memory",
      "category": "Professional work · Qualcomm",
      "title": "4K and 8K playback with less memory",
      "description": "Inline downscaling outputs video at display resolution, reducing system memory use and bandwidth during playback.",
      "outcome": "50–80% less system memory per playback session, saving up to 400 MB for 8K workloads.",
      "skills": [
        "8K video",
        "Downscaling",
        "Memory management",
        "Hardware accelerators"
      ]
    },
    {
      "id": "zero-copy",
      "category": "Professional work · Qualcomm",
      "title": "A direct path into hardware decoding",
      "description": "A decorated linear buffer pool enables hardware decoders to consume reusable buffers without extra CPU copies. Shared-memory synchronization and cache coherency keep CPUs and multimedia accelerators working with consistent data.",
      "skills": [
        "Zero-copy buffers",
        "Shared-memory IPC",
        "DMA",
        "Cache coherency"
      ]
    },
    {
      "id": "grocery-cart",
      "category": "Personal project",
      "title": "Grocery-Cart",
      "description": "A grocery purchase tracking website designed to help users understand consumption and spending through statistics and plan their groceries more effectively.",
      "url": "https://github.com/shivamjoshi22/Grocery-Cart"
    },
    {
      "id": "taxi-demand",
      "category": "Machine learning project",
      "title": "Predicting taxi demand in New York City",
      "description": "A machine learning project targeting pickup demand for a given location in 15-minute intervals, with the goal of helping drivers move toward areas of higher predicted demand.",
      "url": "https://github.com/shivamjoshi22/Taxi-Demad-Prediction-in-New-York-Using-Machine-Learning"
    }
  ],
  "achievements": [
    {
      "id": "hackathon",
      "title": "Qualcomm Hackathon · Second runner-up",
      "description": "Part of a three-person team that received a 25K team award for an inline downscaler that cut memory use by 50–80% during 8K playback."
    },
    {
      "id": "thankq",
      "title": "Qualcomm ThankQ Award",
      "description": "Recognized for coordinating work across teams and delivering improvements to the Snapdragon multimedia stack under tight deadlines."
    }
  ],
  "education": [
    {
      "id": "iiit-delhi",
      "school": "IIIT Delhi, India",
      "qualification": "M.Tech · Computer Science Engineering · CGPA 8.12",
      "start": "2020",
      "end": "2022"
    }
  ],
  "links": [
    {
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/shivamjoshi22/"
    },
    {
      "label": "GitHub",
      "url": "https://github.com/shivamjoshi22"
    },
    {
      "label": "Blog",
      "url": "https://shivam20130.medium.com/"
    }
  ],
  "contact": {
    "message": "Get in touch about embedded Linux, Android system software, or multimedia engineering.",
    "email": "shivamjoshi798@gmail.com"
  }
}

import React from "react";
import { Box, Typography, Container, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "How good is the placement record?",
    answer: "We have a strong placement record, with students securing roles in top companies. Our career support includes resume building, interview preparation, and networking opportunities to enhance job prospects."
  },
  {
    question: "How will I benefit from industry mentors?",
    answer: "Industry mentors provide valuable insights, career guidance, and real-world expertise. They help you build industry connections, improve your skills, and stay updated with market trends, giving you a competitive edge in your career."
  },
  {
    question: "Which stack will I be eligible for?",
    answer: "Your eligibility for a tech stack depends on the skills you develop. We focus on industry-relevant stacks, including data analytics, digital marketing, full-stack development, and business intelligence. Based on your learning path, you can specialize in Python, SQL, Power BI, web development, or AI tools."
  },
  {
    question: "How long do I get to doubt resolve?",
    answer: "Doubt resolution support varies based on the course. Typically, students get access to doubt-solving through live sessions, discussion forums, and mentor support for the entire course duration, with extended support in some cases."
  },
  {
    question: "Do I need a computer science degree to apply?",
    answer: "No, a Computer Science degree is not required. Our courses are designed for beginners and professionals from any background. Basic logical thinking and problem-solving skills are helpful, but we provide all the necessary guidance to help you succeed."
  },
  {
    question: "Do I have to excel in DSA for companies hiring?",
    answer: "While strong DSA (Data Structures & Algorithms) skills are crucial for tech roles in top companies, many roles in data analytics, digital marketing, and business intelligence focus more on problem-solving, SQL, Python, and domain-specific skills. The importance of DSA depends on the job role and company requirements."
  },
  {
    question: "Where do fellow alumni take jobs?",
    answer: "Our alumni secure jobs in top companies like Google, Microsoft, Amazon, Flipkart, and various startups. They work in roles such as software development, data science, digital marketing, business intelligence, and product management across multiple industries."
  },
  {
    question: "What is the average salary hike after completing the program?",
    answer: "The average salary hike varies based on experience, skill level, and industry demand. However, many learners see a 30-100% increase in their salary after completing the program, especially in high-growth fields like data analytics, software development, and digital marketing."
  },
  {
    question: "Who can I ask regarding placements?",
    answer: "You can reach out to our placement support team, career mentors, or program coordinators for any placement-related queries. We provide guidance on job opportunities, resume building, interview preparation, and networking to help you secure the best roles."
  },
  {
    question: "Do you provide job guarantees?",
    answer: "We do not offer a 100% job guarantee, but we provide strong placement support, including resume building, interview preparation, mentorship, and job referrals. Many of our students secure high-paying jobs through our career assistance programs."
  }
];

function FAQSection() {
  return (
    <Container>
      <Box py={4}>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="body1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

export default FAQSection;

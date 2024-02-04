const htmlBody = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Job Application</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
    }

    h1 {
      color: #333;
    }

    p {
      color: #666;
    }

    .signature {
      margin-top: 20px;
    }

    .signature p {
      margin-bottom: 5px;
    }
  </style>
</head>

<body>
  <h1>Job Application: [Your Name]</h1>

  <p>Dear Hiring Manager,</p>

  <p>I am writing to express my interest in the [Job Title] position advertised on [Job Board/Company Website]. With a strong background in [Your Relevant Skills or Experience], I am confident in my ability to contribute effectively to your team.</p>

  <p>Key highlights of my qualifications include:</p>

  <ul>
    <li>Experience in [Relevant Skill or Experience]</li>
    <li>Proven track record in [Another Relevant Skill or Experience]</li>
    <li>[Any Other Relevant Achievements or Qualifications]</li>
  </ul>

  <p>I am particularly drawn to [Company Name] because of its commitment to [specific aspects of the company that you admire or align with]. I am excited about the opportunity to contribute to your team and help [specific goals or projects you are aware of].</p>

  <p>Enclosed is my resume that further outlines my professional background. I would be delighted to discuss how my skills and experiences align with the needs of your team in more detail.</p>

  <p>Thank you for considering my application. I look forward to the opportunity for an interview to discuss how I can contribute to the success of [Company Name].</p>

  <div class="signature">
    <p>Sincerely,</p>
    <p>[Your Full Name]</p>
    <p>[Your Contact Information]</p>
  </div>
</body>

</html>
`;

const subjectLine = "This is a Subject Template";

module.exports = {htmlBody, subjectLine};
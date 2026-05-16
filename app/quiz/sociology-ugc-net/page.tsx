@'
import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="Management UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#0f766e,#14b8a6,#2dd4bf)"
    />
  );
}
'@ | Set-Content app\quiz\management-ugc-net\page.tsx

@'
import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="Sociology UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#7c3aed,#9333ea,#d8b4fe)"
    />
  );
}
'@ | Set-Content app\quiz\sociology-ugc-net\page.tsx

@'
import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="History UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#ea580c,#f97316,#facc15)"
    />
  );
}
'@ | Set-Content app\quiz\history-ugc-net\page.tsx

@'
import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="Anthropology UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#1e3a8a,#2563eb,#60a5fa)"
    />
  );
}
'@ | Set-Content app\quiz\anthropology-ugc-net\page.tsx

@'
import QuizTemplate from "@/app/components/QuizTemplate";
import { psychologyQuestions } from "@/data/psychology";

export default function Page() {
  return (
    <QuizTemplate
      title="Labour Welfare / HRM UGC NET & PSU Quiz"
      questions={psychologyQuestions}
      gradient="linear-gradient(135deg,#14532d,#16a34a,#4ade80)"
    />
  );
}
'@ | Set-Content app\quiz\labour-welfare-ugc-net\page.tsx

npm run build
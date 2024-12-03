// UI
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

// STORES
import useTermsCheckbox from "@/stores/useTermsCheckbox";

export default function Stage_2() {

  const { isAccepted, setIsAccepted } = useTermsCheckbox();

  return (
    <ScrollArea className="h-[100%] w-[100%] px-4">
      <Accordion type="single" collapsible className="w-full mb-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
          <AccordionContent>
            <p>
              By creating an account, accessing, or using any part of NeuroVest's services, you signify your acceptance of these Terms of Use. If you do not agree, you must not use the platform. Continued use of the platform constitutes your agreement to any updates to these terms.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>2. Eligibility</AccordionTrigger>
          <AccordionContent>
            <p>You must meet the following criteria to use NeuroVest:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Be at least 18 years old or the legal age of majority in your jurisdiction.</li>
              <li>Have the legal authority to enter into binding agreements.</li>
              <li>Not be prohibited from accessing financial services under applicable laws.</li>
            </ul>
            <p className="mt-2">If we discover that you do not meet these requirements, we reserve the right to terminate your account immediately.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>3. Account Registration and Security</AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold mb-2">3.1 Registration</h3>
            <p>To use NeuroVest, you must register and provide accurate, complete, and up-to-date information, including but not limited to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Contact information</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">3.2 Account Security</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Notify us immediately of any unauthorized access to your account.</li>
              <li>Ensure that you log out from your account at the end of each session.</li>
              <li>Be solely responsible for all activities that occur under your account.</li>
            </ul>
            <p className="mt-2">We are not liable for losses or damages arising from your failure to safeguard your account information.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>4. Services Provided</AccordionTrigger>
          <AccordionContent>
            <p>NeuroVest offers the following services:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>AI-powered predictions and insights based on historical market data.</li>
              <li>Tools and features for tracking stock market trends.</li>
              <li>Educational content related to financial markets and investment strategies.</li>
            </ul>
            <p className="mt-2">Limitations:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>NeuroVest does not guarantee specific financial outcomes.</li>
              <li>The platform provides informational tools and is not a substitute for professional financial advice.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>5. User Responsibilities</AccordionTrigger>
          <AccordionContent>
            <p>As a NeuroVest user, you agree to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the platform only for lawful purposes.</li>
              <li>Provide accurate and truthful information during registration and use of the platform.</li>
              <li>Refrain from using NeuroVest to engage in fraudulent, illegal, or unethical activities.</li>
            </ul>
            <p className="mt-2">Prohibited Activities:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Reverse-engineering or attempting to extract source code from NeuroVest.</li>
              <li>Sharing or selling your account credentials to others.</li>
              <li>Exploiting the platform for commercial gain without authorization.</li>
              <li>Introducing malicious software or attempting to disrupt the platform's operation.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>6. Payments and Subscription</AccordionTrigger>
          <AccordionContent>
            <p>NeuroVest may offer free and paid subscription plans.</p>
            <h3 className="font-semibold mt-2 mb-2">6.1 Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Payments must be made through approved payment methods.</li>
              <li>Subscription fees are non-refundable unless otherwise stated.</li>
            </ul>
            <h3 className="font-semibold mt-4 mb-2">6.2 Cancellations and Refunds</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>You may cancel your subscription at any time through your account settings.</li>
              <li>Refunds are subject to our refund policy, which may include prorated refunds for specific cases.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>7. Intellectual Property</AccordionTrigger>
          <AccordionContent>
            <h3 className="font-semibold mb-2">7.1 Ownership</h3>
            <p>All content, trademarks, and technologies provided by NeuroVest are the exclusive property of NeuroVest or its licensors. You do not acquire ownership rights by using the platform.</p>
            <h3 className="font-semibold mt-4 mb-2">7.2 User-Generated Content</h3>
            <p>By posting or sharing content on NeuroVest, you grant us a non-exclusive, royalty-free license to use, reproduce, and distribute your content for the purpose of operating the platform.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>8. Disclaimer of Warranties</AccordionTrigger>
          <AccordionContent>
            <p>NeuroVest is provided on an "as-is" and "as-available" basis. We make no representations or warranties of any kind regarding the platform, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accuracy of data or predictions.</li>
              <li>Fitness for a particular purpose.</li>
              <li>Uninterrupted or error-free service.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-9">
          <AccordionTrigger>9. Limitation of Liability</AccordionTrigger>
          <AccordionContent>
            <p>To the fullest extent permitted by law, NeuroVest shall not be liable for:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Any indirect, incidental, or consequential damages arising from your use of the platform.</li>
              <li>Losses resulting from decisions made based on NeuroVest's predictions or insights.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-10">
          <AccordionTrigger>10. Privacy Policy</AccordionTrigger>
          <AccordionContent>
            <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal data.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-11">
          <AccordionTrigger>11. Risk Acknowledgment</AccordionTrigger>
          <AccordionContent>
            <p>By using NeuroVest, you acknowledge:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>The inherent risks of investing in the stock market.</li>
              <li>That past performance is not indicative of future results.</li>
              <li>That NeuroVest does not provide personalized investment advice.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-12">
          <AccordionTrigger>12. Modification of Terms</AccordionTrigger>
          <AccordionContent>
            <p>NeuroVest reserves the right to modify these Terms of Use at any time. Updates will be communicated through the platform. Continued use of the platform after updates constitutes acceptance of the new terms.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-13">
          <AccordionTrigger>13. Termination of Account</AccordionTrigger>
          <AccordionContent>
            <p>We reserve the right to suspend or terminate your account for violations of these terms, including but not limited to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Providing false or misleading information.</li>
              <li>Engaging in prohibited activities.</li>
              <li>Failing to comply with applicable laws or regulations.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-14">
          <AccordionTrigger>14. Governing Law and Dispute Resolution</AccordionTrigger>
          <AccordionContent>
            <p>These Terms of Use are governed by the laws of [Jurisdiction].</p>
            <h3 className="font-semibold mt-2 mb-2">14.1 Dispute Resolution</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Any disputes shall be resolved through arbitration in accordance with the rules of [Arbitration Organization].</li>
              <li>Users agree to waive the right to bring disputes in court or participate in class actions.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-15">
          <AccordionTrigger>15. Contact Information</AccordionTrigger>
          <AccordionContent>
            <p>If you have questions about these Terms of Use, you can contact us at:</p>
            <a href="mailto:firasdabbabi@gmail.com" className="mt-2">Email: firasdabbabi@gmail.com</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex items-start space-x-2 my-5 bg-yellow-100 border-yellow-300 text-gray-800 border-[1px] rounded-lg p-2">
        <Checkbox id="terms" className="mt-1" checked={!isAccepted} onCheckedChange={() => setIsAccepted(true)} />
        <label htmlFor="terms" className="text-sm font-medium leading-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          By using NeuroVest, you confirm that you have read, understood, and agreed to these Terms of Use.
        </label>
      </div>
    </ScrollArea>
  )
}

export const stage_2_title = `Terms of Use`;
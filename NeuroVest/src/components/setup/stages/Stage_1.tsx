// UI
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Stage_1() {
  return (
    <ScrollArea className="h-[100%] w-[100%] px-4 py-4">
      <main className="flex flex-col items-start justify-start">
        <h1 className="text-3xl sm:text-center w-full font-extrabold sm:mt-5 mb-2 capitalize">Welcome to {import.meta.env.VITE_APP_NAME}</h1>
        <p className="font-semibold text-gray-500 mb-4 sm:text-center w-full">Your AI-powered stock market predictor</p>

        <div className="grid gap-4 py-4">
          <p className="text-md font-normal">We're excited to have you onboard and help you make informed investment decisions. Before we dive into the powerful tools at your disposal, let's complete your account setup in just a few simple steps:</p>
          <ol className="list-decimal list-inside space-y-1 font-semibold text-normal">
            <li>📜 Read and Understand Our Terms of Use</li>
            <div className="ml-11 font-normal pb-2 text-gray-600 sm:w-[90%]">This step ensures that you are aware of the rules and guidelines for using the platform. It helps protect both you and the service provider by setting clear expectations and legal boundaries.</div>
            <li>👤 Fill in Your Personal Information</li>
            <div className="ml-11 font-normal pb-2 text-gray-600 sm:w-[90%]">Providing accurate personal information is crucial for account verification and security. It also helps tailor the service to your needs and preferences.</div>
            <li>✍️ Sign Important Agreements</li>
            <div className="ml-11 font-normal pb-2 text-gray-600 sm:w-[90%]">Signing agreements is essential for legal and regulatory compliance. It formalizes your consent to the terms and conditions, ensuring that both parties are on the same page.</div>
            <li>🔍 Review Your Information</li>
            <div className="ml-11 font-normal pb-2 text-gray-600 sm:w-[90%]">Reviewing your information allows you to double-check for any errors or omissions. This step ensures that all your details are correct and up-to-date, preventing potential issues down the line.</div>
            <li>🎉 Complete the Setup</li>
            <div className="ml-11 font-normal pb-2 text-gray-600 sm:w-[90%]">Completing the setup finalizes your account creation, giving you full access to the platform's features and tools. It marks the beginning of your journey with the service, ready to make informed investment decisions.</div>
          </ol>
          <p className="font-bold w-full text-center">Let's get started!</p>
        </div>
      </main>
    </ScrollArea>
  )
}

export const stage_1_title = `Introduction`;

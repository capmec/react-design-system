import { Checkbox } from "@radix-ui/react-checkbox"
import { Envelope, Lock } from "phosphor-react"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { TextInput } from "../components/TextInput"
import { Text } from "../components/Text"
import { Logo } from "./../Logo"

export function SignIn() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-1'>
          Log in to start using it!
        </Text>
      </header>

      <form className='flex  flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor='email' className='flex flex-col gap-3'>
          <Text className='font-semibold'>E-mail address </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type='email'
              id='email'
              placeholder='E-mail Address'
            />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Password </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type='password'
              id='password'
              placeholder='******'
            />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>
            Remember me for 30 days
          </Text>
        </label>

        <Button type='submit' className='mt-4'>
          Enter the platform{" "}
        </Button>

        <footer className='flex flex-col items-center gap-4 mt-8 '>
          <Text size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-200'>
              Forgot your password?
            </a>
          </Text>
          <Text size='sm'>
            <a href='' className='text-gray-400 underline hover:text-gray-200'>
              Sign up
            </a>
          </Text>
        </footer>
      </form>
    </div>
  )
}

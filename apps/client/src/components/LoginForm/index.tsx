import Button from '@ui/Button';
import Input from '@ui/Input';
import { useState } from 'react';
import { trpc } from '../../utils/trpc';
import AuthProviderButton from './AuthProviderButton';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const hello = trpc.auth.login.useMutation();

  const handleLoading = () => {
    hello.mutate({ username: name, password });
  };

  return (
    <div className="flex w-full min-w-fit max-w-xl flex-col gap-10 rounded-xl bg-neutral-900 p-16">
      <h1 className="leading-none tracking-wide">Login form</h1>
      <div className="flex flex-col gap-5">
        <Input labelText="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input labelText="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <Button intent="primary" loading={hello.isLoading} onClick={handleLoading}>
        Login
      </Button>
      <div className="relative h-0 w-full border-spacing-2 rounded border-b-2 border-dotted border-b-neutral-700">
        <span className="absolute left-1/2 -translate-y-1.5 -translate-x-1/2 bg-neutral-900 px-3 text-base leading-none text-neutral-400">
          Or
        </span>
      </div>
      <AuthProviderButton />
    </div>
  );
};

export default LoginForm;

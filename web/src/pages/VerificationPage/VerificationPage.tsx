import { FC, useState } from 'react';
import { useEffect } from 'react';

import type { MutationverifyUserArgs } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

const VERIFICATION_MUTATION = gql`
  mutation verifyUser($token: String!) {
    verifyUser(token: $token) {
      isVerified
    }
  }
`;

interface Props {
  token: string;
}

const VerificationPage: FC<Props> = ({ token }) => {
  const [isError, setIsError] = useState(false);
  const [verifyToken] = useMutation(VERIFICATION_MUTATION, {
    onCompleted: () => {
      toast.success('User is Verified');
      navigate(routes.home());
    },
    onError: (error) => {
      console.log('ERROR', error.message);
      setIsError(true);
      toast.error(error.message);
    },
  });

  useEffect(() => {
    verifyToken({ variables: { token } });
  }, [token, verifyToken]);

  return (
    <>
      <MetaTags title="Verification" description="Verification page" />

      <h1>VerificationPage</h1>
      {isError && <div>Token not found!</div>}
    </>
  );
};

export default VerificationPage;

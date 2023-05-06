import { useEffect } from 'react';

import type { MutationverifyUserArgs } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

const VERIFICATION_MUTATION = gql`
  mutation verifyUser($token: String!) {
    verifyUser(token: $token) {
      isVerified
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
);

export const Success = ({
  token,
}: CellSuccessProps<MutationverifyUserArgs>) => {
  const [verifyToken] = useMutation(VERIFICATION_MUTATION, {
    onCompleted: () => {
      toast.success('Post updated');
      navigate(routes.home());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    verifyToken({ variables: { token } });
  }, [token, verifyToken]);

  return <div>Verify success</div>;
};

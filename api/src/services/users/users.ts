import type { QueryResolvers, MutationResolvers } from 'types/graphql';

import { db } from 'src/lib/db';

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany();
};

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  });
};

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  });
};

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  });
};

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  });
};

export const verifyUser: MutationResolvers['verifyUser'] = async ({
  token,
}) => {
  const user = await db.user.findFirst({ where: { verificationToken: token } });
  if (user) {
    return db.user.update({
      where: { id: user.id },
      data: { verificationToken: null, isVerified: true },
    });
  } else {
    throw new Error('Token not found');
  }
};

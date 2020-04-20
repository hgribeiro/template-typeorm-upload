import { getCustomRepository } from 'typeorm';
import TransactionRepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);
    const findTransasctionToDelete = await transactionsRepository.findOne(id);
    if (!findTransasctionToDelete) {
      throw new AppError('Transaction does noe exist!');
    }
    await transactionsRepository.remove(findTransasctionToDelete);
  }
}

export default DeleteTransactionService;

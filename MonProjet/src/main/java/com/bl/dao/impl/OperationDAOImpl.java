package com.bl.dao.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.bl.dao.AbstractDao;
import com.bl.dao.IOperationDAO;
import com.bl.model.Operation;

@Repository("operationDao")
public class OperationDAOImpl extends AbstractDao<Long, Operation> implements
		IOperationDAO {
	// static HashMap<Long, Operation> operationsMap = new HashMap<Long,
	// Operation>();
	//
	// @Override
	// public List<Operation> getAllOperation() {
	// List<Operation> operations = new
	// ArrayList<Operation>(operationsMap.values());
	// return operations;
	// }
	//
	// @Override
	// public Operation addOperation(Operation ope) {
	// Long id = ope.getId();
	// operationsMap.put(id, ope);
	// return operationsMap.get(id);
	// }

	@Override
	public Set<Operation> getAllOperation() {
		@SuppressWarnings("unchecked")
		Set<Operation> operations = new HashSet<Operation>(getEntityManager().createQuery(
				"select op from Operation op").getResultList());
		return operations;
	}

	@Override
	public Operation addOperation(Operation ope) {
		persist(ope);
		return getByReference(ope.getId());
	}

}

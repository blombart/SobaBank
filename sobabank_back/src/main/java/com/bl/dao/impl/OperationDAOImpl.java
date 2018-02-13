package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import com.bl.dao.IOperationDAO;
import com.bl.model.Operation;

@Component
public class OperationDAOImpl implements IOperationDAO{
	static HashMap<Long, Operation> operationsMap = new HashMap<Long, Operation>();
	
	@Override
	public List<Operation> getAllOperation() {
		List<Operation> operations = new ArrayList<Operation>(operationsMap.values());
		return operations;
	}

	@Override
	public Operation addOperation(Operation ope) {
		Long id = ope.getId();
		operationsMap.put(id, ope);
		return operationsMap.get(id);
	}

}

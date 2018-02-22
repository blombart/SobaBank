package com.bl.dao;

import java.util.Set;

import com.bl.model.Operation;

public interface IOperationDAO {

	public Set<Operation> getAllOperation();
	
	public Operation addOperation(Operation ope);
	
}

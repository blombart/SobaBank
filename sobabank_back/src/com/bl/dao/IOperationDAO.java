package com.bl.dao;

import java.util.List;

import com.bl.model.Operation;

public interface IOperationDAO {

	public List<Operation> getAllOperation();
	
	public Operation addOperation(Operation ope);
	
}

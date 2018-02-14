package com.bl.dao.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Component;

import com.bl.dao.IAgentDAO;
import com.bl.model.Agent;
import com.bl.model.Client;
import com.bl.model.DemandeOuvertureCompte;

@Component
public class AgentDAOImpl implements IAgentDAO{
	static HashMap<Long, Agent> agentsMap = new HashMap<Long, Agent>();
	static int cpt;
//	public AgentDAOImpl() {
//		Agent agent = new Agent();
//		agent.setId(0L);
//		agentsMap.put(0L, agent);
//	}
	
	@Override
	public List<Agent> getAllAgents() {
		List<Agent> agents = new ArrayList<Agent>(agentsMap.values());
		return agents;
	}

	@Override
	public Agent addAgent(Agent agent) {
		cpt = agentsMap.size();
		cpt++;
		long id = agent.getId() + (cpt);
		agent.setId(id);
//	ancienne facon d'avoir id	Long id = agent.getId();
		agent.setDemandesOuverture(new ArrayList<DemandeOuvertureCompte>());
		agent.setClients(new ArrayList<Client>());
		
		agentsMap.put(id, agent);
		Agent _agent = agentsMap.get(id);
		return _agent;
	}

	@Override
	public Agent updateAgent(Agent agent) {
		Long id = agent.getId();
		System.out.println("id de l'agent editer dao:" + id);
		agentsMap.put(id, agent);
		Agent _agent = agentsMap.get(id);
		return _agent;
	}

	@Override
	public void deleteAgent(Long id) {
		agentsMap.remove(id);
	}

	@Override
	public Agent getAgentById(Long id) {
		Agent agent = agentsMap.get(id);
		return agent;
	}

	@Override
	public Agent getAgentByMatricule(String matricule) {
		Agent agent = null;
		
		Set<Long> keys = agentsMap.keySet();
		Iterator<Long> it = keys.iterator();
		
		while(it.hasNext()){
			Long id = it.next();
			if(matricule == agentsMap.get(id).getMatricule()){
				agent = agentsMap.get(id);
			}
		}
		
		return agent;
	}


}

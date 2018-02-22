package com.bl.dao.impl;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bl.dao.AbstractDao;
import com.bl.dao.IAgentDAO;
import com.bl.model.Agent;
import com.bl.model.Client;
import com.bl.model.DemandeOuvertureCompte;

@Repository("agentDao")
public class AgentDAOImpl extends AbstractDao<Long, Agent> implements IAgentDAO{
//	static HashMap<Long, Agent> agentsMap = new HashMap<Long, Agent>();
//	static int cpt;
//	public AgentDAOImpl() {
//		Agent agent = new Agent();
//		agent.setId(0L);
//		agentsMap.put(0L, agent);
//	}
	
//	@Override
//	public List<Agent> getAllAgents() {
//		List<Agent> agents = new ArrayList<Agent>(agentsMap.values());
//		return agents;
//	}
//
//	@Override
//	public Agent addAgent(Agent agent) {
//		cpt = agentsMap.size();
//		cpt++;
//		long id = agent.getId() + (cpt);
//		agent.setId(id);
//		agent.generateMatricule();
//		agent.setDemandesOuverture(new ArrayList<DemandeOuvertureCompte>());
//		agent.setClients(new ArrayList<Client>());
//		
//		agentsMap.put(id, agent);
//		Agent _agent = agentsMap.get(id);
//		return _agent;
//	}
//
//	@Override
//	public Agent updateAgent(Agent agent) {
//		Long id = agent.getId();
//		System.out.println("id de l'agent editer dao:" + id);
//		agentsMap.put(id, agent);
//		Agent _agent = agentsMap.get(id);
//		return _agent;
//	}
//
//	@Override
//	public void deleteAgent(Long id) {
//		agentsMap.remove(id);
//	}
//
//	@Override
//	public Agent getAgentById(Long id) {
//		Agent agent = agentsMap.get(id);
//		return agent;
//	}
//
//	@Override
//	public Agent getAgentByMatricule(String matricule) {
//		Agent agent = null;
//		
//		Set<Long> keys = agentsMap.keySet();
//		Iterator<Long> it = keys.iterator();
//		
//		while(it.hasNext()){
//			Long id = it.next();
//			if(matricule == agentsMap.get(id).getMatricule()){
//				agent = agentsMap.get(id);
//			}
//		}
//		
//		return agent;
//	}
	@Override
	public Set<Agent> getAllAgents() {
		@SuppressWarnings("unchecked")
		Set<Agent> agents = new HashSet<Agent>(getEntityManager().createQuery("select ag from Agent ag").getResultList());
		return agents;
	}

	@Override
	public Agent addAgent(Agent agent) {
		persist(agent);
		return getByReference(agent.getId());
	}

	@Override
	public Agent updateAgent(Agent agent) {
		persist(agent);
		return getByReference(agent.getId());
	}

	@Override
	public void deleteAgent(Long id) {
		Agent agent = getByReference(id);
		delete(agent);
	}

	@Override
	public Agent getAgentById(Long id) {
		Agent agent = getByKey(id);
		return agent;
	}

	@Override
	public Agent getAgentByMatricule(String matricule) {
		Agent agent = (Agent) getEntityManager().createQuery("select ag from Agent ag where ag.matricule=?")
				.setParameter(1, matricule);
		return agent;
	}
	
	public Agent getAgentByDem(Long id) {
		BigInteger idAgentB = (BigInteger) getEntityManager().createNativeQuery("select a.user_id from user_demandeouverturecompte a where a.demandesOuverture_id=?")
				.setParameter(1, id).getSingleResult();
		Long idAgent = idAgentB.longValue();
		return getByKey(idAgent);
	}


}

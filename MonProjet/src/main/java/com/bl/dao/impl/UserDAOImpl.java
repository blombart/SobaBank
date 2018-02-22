package com.bl.dao.impl;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.bl.dao.AbstractDao;
import com.bl.dao.IUserDAO;
import com.bl.model.User;

@Repository("userDAO")
public class UserDAOImpl extends AbstractDao<Long, User> implements IUserDAO{
//	static HashMap<String, User> usersMap =  new HashMap<String, User>();
//	static int cpt;
//	
//	public UserDAOImpl() {
//		User user1 = new User(1,"Hadjaz","Abderrahmane","1234","habder@test.com","guest");
//		User user2 = new User(2,"Sta","Omar","1234","omar@test.com","client");
//		User user3 = new User(3,"Legay","Sebastien","1234","sb@test.com","agent");
//		User user4 = new User(4,"Lombart","Benjamin","1234","benj@test.com","admin");
//		
//		usersMap.put("1", user1);
//		usersMap.put("2", user2);
//		usersMap.put("3", user3);
//		usersMap.put("4", user4);
//		
//	}
//	
//	public List<User> getAllUsers(){
//		List<User> userList = new ArrayList<User>(usersMap.values());
//		return userList;
//	}
//	
//	public User getUserForId(String id){
//		User user = usersMap.get(id);
//		return user;
//	}
//
//	public User createUser(User user){
//		cpt = usersMap.size();
//		cpt++;
//		long id = user.getId() + (cpt);
//		String newId = String.valueOf(id);
//		user.setId(Long.parseLong(newId));
//		
//		usersMap.put(newId, user);
//		return usersMap.get(user.getId()+"");
//	}
//	
//	public User updateUser(User user){
//		
//		if (usersMap.get(user.getId()+"") != null){
//			usersMap.get(user.getId()+"").setNom(user.getNom());
//			usersMap.get(user.getId()+"").setPrenom(user.getPrenom());
//			usersMap.get(user.getId()+"").setMdp(user.getMdp());
//			usersMap.get(user.getId()+"").setEmail(user.getEmail());
//			usersMap.get(user.getId()+"").setRole(user.getRole());
//		} else {
//			usersMap.put(user.getId() + "", user);
//		}
//		
//		return usersMap.get(user.getId()+"");
//	}
//	
//	public User deleteUser(String id){
//		User userResponse = usersMap.remove(id);
//		return userResponse;
//	}
//	
//	public List<User> deleteAllUser(){
//		List<User> userList = new ArrayList<User>(usersMap.values());
//		usersMap.clear();
//		return userList;
//	}
//	
//	
//		@Override
//	public User authenticateUser(String name, String password) {
//		List<User> userList = new ArrayList<User>(usersMap.values());
//		User userTemp = new User();
//		
//		for (User user : userList){
//			
//			if(user.getNom().equals(name) && user.getMdp().equals(password)){
//				userTemp = user;
//			}
//			
//			
//			
//		}
//		
//		return userTemp;
//		
//		
//		
//	}
	
	public Set<User> getAllUsers(){
		@SuppressWarnings("unchecked")
		Set<User> userList = new HashSet<User>(getEntityManager().createQuery("select u from User u").getResultList());
		return userList;
	}
	
	public User getUserForId(Long id){
		User user = getByKey(id);
		return user;
	}

	public User createUser(User user){
		persist(user);
		return getByKey(user.getId());
	}
	
	public User updateUser(User user){
		persist(user);
		return getByKey(user.getId());
	}
	
	public User deleteUser(Long id){
		User user = getByKey(id);
		delete(user);
		return user;
	}
	
		@Override
	public User authenticateUser(String name, String password) {
		User user = (User)getEntityManager().createQuery("select u from User u where u.nom=? AND u.mdp=?")
				.setParameter(1, name)
				.setParameter(2, password).getSingleResult();
				
		return user;
	}
	
}

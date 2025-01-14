package com.aloha.movieproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aloha.movieproject.domain.UserAuth;
import com.aloha.movieproject.domain.Users;
import com.aloha.movieproject.mapper.UserMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;
    
    @Override
    public Users select(String username) throws Exception {
        Users user = userMapper.select(username);
        return user;
    }

    @Override
    public Users selectl(String username) throws Exception {
        return userMapper.selectl(username);
    }

    @Override
    @Transactional // 트랜잭션 처리를 설정 (회원정보, 회원권한)
    public int join(Users user) throws Exception {
        String username = user.getUsername();
        String password = user.getPassword();
        String encodedPassword = passwordEncoder.encode(password);  // 🔒 비밀번호 암호화
        user.setPassword(encodedPassword);
        user.setEnabled(true);
        // 회원 등록
        int result = userMapper.join(user);
        // Files files = new Files();
        // files.setFkId(user.getId());
        // files.setFkTable("user");
        // files.setFile(user.getFile());
        // files.setDivision("main");
        // fileService.upload(files);

        if( result > 0 ) {
            // 회원 기본 권한 등록
            UserAuth userAuth = new UserAuth();
            userAuth.setUserId(username);
            userAuth.setAuth("ROLE_USER");
            result = userMapper.insertAuth(userAuth);
        }
        return result;
    }

    @Override
    public int update(Users user) throws Exception {
        int result = userMapper.update(user);
        return result;
    }

    @Override
    public int insertAuth(UserAuth userAuth) throws Exception {
        int result = userMapper.insertAuth(userAuth);
        return result;
    }

    @Override
    public int deleteAuth(int no) throws Exception {
        int result = userMapper.deleteAuth(no);
        return result;
    }

    @Override
    public PageInfo<Users> list(int page, int size) throws Exception {
       // ⭐ PageHelper.startPage(현재 페이지, 페이지당 게시글 수);
        PageHelper.startPage(page, size);
        List<Users> list = userMapper.list();
        
        // ⭐ PageInfo<Board>( 리스트, 노출 페이지 개수 )
        PageInfo<Users> pageInfo = new PageInfo<Users>(list, 5);
        return pageInfo;
    }

    @Override
    public PageInfo<Users> list(int page, int size, String search) throws Exception {
         // ⭐ PageHelper.startPage(현재 페이지, 페이지당 게시글 수);
         PageHelper.startPage(page, size);
         List<Users> list = userMapper.search(search);
 
         // ⭐ PageInfo<Board>( 리스트, 노출 페이지 개수 )
         PageInfo<Users> pageInfo = new PageInfo<Users>(list, 5);
         return pageInfo;
    }

    @Override
    public List<Users> list() throws Exception {
        List<Users> list = userMapper.list();
        return list;
    }

    @Override
    public int updatePw(Users user) throws Exception {
        int result = userMapper.updatePw(user);
        return result;
    }

    @Override
    public int updateEmail(Users user) throws Exception {
        int result = userMapper.updateEmail(user);
        return result;
    }
    

    
}


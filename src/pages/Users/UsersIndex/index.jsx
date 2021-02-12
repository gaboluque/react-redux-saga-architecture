import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func } from 'prop-types';
import { Button, Table } from 'antd';
import { EyeFilled } from '@ant-design/icons';
import { fetchUsersNotifier } from '../../../redux/modules/users/actions/fetchUsers';
import { userType } from '../../../utils/types/usersTypes';
import { showUserNotifier } from '../../../redux/modules/users/actions/showUser';

const UsersIndex = ({ fetchUsers, users, showUser }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Website',
      dataIndex: 'website',
    },
    {
      dataIndex: 'id',
      width: 100,
      render: (_id, row) => (
        <Button
          type="link"
          onClick={() => showUser(row)}
          icon={<EyeFilled />}
        />
      ),
    },
  ];

  return (
    <div className="users-index">
      <Table rowKey="id" dataSource={users} columns={columns} />
    </div>
  );
};

UsersIndex.propTypes = {
  fetchUsers: func.isRequired,
  showUser: func.isRequired,
  users: arrayOf(userType).isRequired,
};

UsersIndex.defaultProps = {};

const mapStateToProps = (state) => ({
  users: state.users.userList,
});

const mapDispatchToProps = {
  fetchUsers: fetchUsersNotifier,
  showUser: showUserNotifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndex);
